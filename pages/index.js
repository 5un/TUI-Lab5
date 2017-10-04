import React from 'react'
import ReactDOM from 'react-dom'
import WebAudioFont from '../components/web-audio-font'
import PerspectiveTracks from '../components/perspective-tracks'
import globalCss from '../css/global.css.js'
import { Button, Score } from '../components/elements'
import _ from 'lodash'

const bpm = 100;
const GAME_STATE_INIT = 0
const GAME_STATE_STARTED = 1

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFrontEnd: false,
      analogInput: 0,
      gameState: GAME_STATE_INIT,
      score: 0,
      triggeredKey: -1,
    }

    // Generate Notes
    this.notes = []
    let currentTime = 8;
    _.forEach(_.range(1000), (value, key) => {
      // const duration = _.random(1, 4)
      const duration = 2
      this.notes.push({ id: key, track: _.random(0, 4), time: currentTime, duration });
      currentTime += duration;
    });
  }

  componentDidMount() {
    this.setState({ isFrontEnd: true })
  }

  renderWS() {
    if(this.state.isFrontEnd) {
      const Websocket = require('react-websocket');
      return (<Websocket url='ws://localhost:8080/' onMessage={this.handleData.bind(this)}/>);
    }
  }

  handleData(data) {
    let result = JSON.parse(data);
    if(result.event ==='sensor') {
      if(this.webAudioFont && result.l && result.r) {
        //TODO: detect poloarity
        if(result.l < 100 && result.r < 100) {
          this.setState({ triggeredKey: -1 });
        } else {
          let triggeredKey = Math.floor((result.r - result.l + 512) / (1024.0 / 5.0))
          triggeredKey = Math.min(Math.max(triggeredKey, 0), 5)
          console.log(triggeredKey);
          this.setState({ triggeredKey });
        }
      }
    }
  }

  handleNoteHit() {
    const { score } = this.state;
    this.setState({ score: score + 1 });
  }

  handleMouseMove(e) {
    // console.log(e.screenX, e.screenY);
    // const triggeredKey = Math.floor(e.screenX * 5 / 1280.0);
    // this.setState({ triggeredKey })
  }

  handleStartButtonClicked() {
    this.webAudioFont.startBeat();
    this.perspectiveTracks.startBeat();
    this.setState({ gameState: GAME_STATE_STARTED })
  }

  render() {
    const { analogInput, isFrontEnd, triggeredKey, gameState, score } = this.state;
    const fullscreenStyle = { position: 'absolute', left: 0, top: 0, width: '100vw' };
    return (
      <div onMouseMove={this.handleMouseMove.bind(this)}>
        <style jsx global>{globalCss}</style>
        <PerspectiveTracks 
          notes={this.notes} 
          bpm={bpm}
          ref={(ref) => {this.perspectiveTracks = ref}}
          triggeredKey={triggeredKey}
          onNoteHit={this.handleNoteHit.bind(this)}
        />
        <div style={{...fullscreenStyle, padding: '40px', textAlign: 'center'}}>
          <h1>FSR Dance</h1>
          {gameState === GAME_STATE_INIT && 
            <Button onClick={this.handleStartButtonClicked.bind(this)}>Start</Button>
          }
          {gameState === GAME_STATE_STARTED &&
            <Score>{score}</Score>
          }
        </div>
        {this.renderWS()}
        <WebAudioFont ref={(ref) => {this.webAudioFont = ref}}/>
      </div>
    );
  }

}