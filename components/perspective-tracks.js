import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import _ from 'lodash'

// Beat length in pixels
const trackLength = 700
const beatsPerTrack = 16
const beatLength = trackLength / beatsPerTrack


const TracksContainer = styled.div`
  position: relative;
  transform: perspective( 600px ) translate3d(50%, 0px, -500px) rotateX(45deg);
`

const colors = [
  'red', 'purple', 'blue', 'cyan', 'rgb(0,255,0)'
]

const Note = styled.div`
  position: absolute;
  background-color: ${props => colors[props.note.track]};
  width: 50px;
  height: ${props => `${props.note.duration * beatLength}px`};
  transform: ${props => `translate3d(${props.note.track * 100 - 250}px, ${props.note.ypos}px, 0px)`};
  -webkit-perspective-origin: 50% 50%;
  opacity: 0.5;
  box-shadow: 0 0 30px 5px ${props => colors[props.note.track]}; 

`

const NoteKey = styled.div`
  position: absolute;
  background-color: ${props => colors[props.track]};
  width: 50px;
  height: 25px;
  transform: ${props => `translate3d(${props.track * 100 - 250}px, ${trackLength}px, 0px)`};
  opacity: ${props => props.triggered ? '0.8': '0.2'};
  border: 2px solid white;
  box-shadow: 0 0 30px 5px ${props => colors[props.track]}; 
`

const BottomLine = styled.div`
  position: absolute;
  background-color: white;
  width: 800px;
  height: 2px;
  left: -400px;
  top: ${trackLength}px;
  -webkit-perspective-origin: 50% 50%;
`


export default class PerspectiveTracks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      triggerPos: 0.0
    }
  }

  animFrame() {
    const { bpm } = this.props;
    const currentTime = Date.now() - this.startBeatTime;
    this.setState({ currentTime });
    setTimeout(() => {
      this.animFrame();
    }, 60.0 / bpm * 1000 );
  }

  startBeat() {
    this.startBeatTime = Date.now()

    const { bpm } = this.props;
    const currentTime = Date.now() - this.startBeatTime;
    this.setState({ currentTime });
    
    setInterval(() => {
      const currentTime = Date.now() - this.startBeatTime;

      const { triggeredKey, notes } = this.props;
      const noteRange = 2 * msPerBeat
      const msPerBeat = (60.0 / bpm) * 1000
      const notesToCheck = _.filter(notes, note => (note.time * msPerBeat <= currentTime  && (note.time + note.duration) * msPerBeat >= currentTime));
      _.forEach(notesToCheck, note => {
        if(note.track === triggeredKey) {
          if(this.props.onNoteHit) {
            this.props.onNoteHit();
          }
        }
      });
      
      this.setState({ currentTime });
    }, 60.0 / bpm * 1000 );
  }


  render() {
    const { notes, bpm, triggeredKey } = this.props
    const { currentTime } = this.state
    // visible notes

    const msPerBeat = (60.0 / bpm) * 1000
    const noteRange = beatsPerTrack * msPerBeat
    const visibleNotes = _.filter(notes, note => (note.time * msPerBeat > currentTime - noteRange && note.time * msPerBeat < currentTime + noteRange));
    // distance until note = 500 - ((((note.time * msPerBeat) - currentTime) / msPerBeat) * beatLength)
    let notesToDisplay = _.map(visibleNotes, note => (
      // {... note, ypos: trackLength - (((( (note.time + (note.duration - 1)) * msPerBeat) - currentTime) / msPerBeat) * beatLength) }
      {... note, ypos: trackLength - (((( (note.time + note.duration) * msPerBeat) - currentTime) / msPerBeat) * beatLength) }
    ));

    return (<TracksContainer>
      {_.map(notesToDisplay, (note) => (
        <Note note={note} key={note.id}></Note>
      ))}
      <BottomLine />
      <div style={{ color: 'white' }}></div>
      <NoteKey track={0} key={0} triggered={triggeredKey === 0} />
      <NoteKey track={1} key={1} triggered={triggeredKey === 1} />
      <NoteKey track={2} key={2} triggered={triggeredKey === 2} />
      <NoteKey track={3} key={3} triggered={triggeredKey === 3} />
      <NoteKey track={4} key={4} triggered={triggeredKey === 4} />
    </TracksContainer>)
  }

}