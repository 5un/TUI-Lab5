import React from 'react'
import Script from 'react-load-script'
import _ from 'lodash'
import { generateBeat, generateBeatWithSynth } from '../lib/beat-generator'

const scriptList = [
  'https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js',
  'https://surikov.github.io/webaudiofontdata/sound/12836_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12840_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12841_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12842_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12846_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12848_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/12851_6_JCLive_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/0390_Aspirin_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/0480_Chaos_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/0550_Chaos_sf2_file.js',
  'https://surikov.github.io/webaudiofontdata/sound/0090_JCLive_sf2_file.js',
];

export default class WebAudioFont extends React.Component {

  constructor(props) {
    super(props);
    this.scriptLatch = scriptList.length;

    this.beat = {
      started: false,
      startTime: 0,
      bpm: 100
    }

    this.beat.N = 4 * 60 / this.beat.bpm;
    this.beat.pieceLen = 4 * this.beat.N;
    this.beat.len = 1/16 * this.beat.N;
    this.beat.volume = 0.4;

  }

  handleScriptLoad() {
    if(this.scriptLatch - 1 > 0) {
      this.scriptLatch -= 1;
    } else {
      if(window) {
        const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContextFunc();
        this.player = new WebAudioFontPlayer();

        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_36_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_40_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_42_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_tone_0390_Aspirin_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_tone_0480_Chaos_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_46_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_48_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_drum_51_6_JCLive_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_tone_0550_Chaos_sf2_file');
        this.player.loader.decodeAfterLoading(this.audioContext, '_tone_0090_JCLive_sf2_file');
        
        var gainDrums = this.audioContext.createGain();
        gainDrums.connect(this.audioContext.destination);
        gainDrums.gain.value=0.5;
        var gainSynth = this.audioContext.createGain();
        gainSynth.connect(this.audioContext.destination);
        gainSynth.gain.value=0.3;
        var gainBass = this.audioContext.createGain();
        gainBass.connect(this.audioContext.destination);
        gainBass.gain.value=0.7;
        var gainHit = this.audioContext.createGain();
        gainHit.connect(this.audioContext.destination);
        gainHit.gain.value=0.5;
        
        
        for(var i=0; i<_tone_0480_Chaos_sf2_file.zones.length; i++){
          _tone_0480_Chaos_sf2_file.zones[i].ahdsr=false;
        }

        this.beat.notes = generateBeat({
          orchestra: (pitch, duration) => {
            return { gain:gainHit, preset:_tone_0550_Chaos_sf2_file, pitch:pitch, duration: duration * this.beat.N };
          },
          synth: (pitch, duration) => {
            return {gain:gainSynth,preset:_tone_0480_Chaos_sf2_file,pitch:pitch,duration:duration * this.beat.N};
          },
          bass: (pitch, duration) => {
            return {gain:gainBass,preset:_tone_0390_Aspirin_sf2_file,pitch:pitch,duration:duration * this.beat.N};
          },
          drum: () => {
            return {gain:gainDrums,preset:_drum_36_6_JCLive_sf2_file,pitch:36,duration:1};
          },
          snare: () => {
            return {gain:gainDrums,preset:_drum_40_6_JCLive_sf2_file,pitch:38,duration:1};
          },
          hihat: () => {
            return {gain:gainDrums,preset:_drum_42_6_JCLive_sf2_file,pitch:42,duration:1};
          },
          open: () => {
            return {gain:gainDrums,preset:_drum_46_6_JCLive_sf2_file,pitch:46,duration:1};
          }
        });

        if (this.props.onSoundFontsLoaded) {
          this.props.onSoundFontsLoaded();
        }
        
      }
    }
  }

  startBeat() {    
    if (this.beat.started) {
      console.log('started already');
    } else {
      this.beat.started = true;
      this.beat.startTime = this.audioContext.currentTime + 0.1;
      this.nextPiece();
      this.beat.startTime += this.beat.pieceLen;
      setInterval(() => {
        if (this.audioContext.currentTime > this.beat.startTime - 1 / 4 * this.beat.N) {
          this.nextPiece();
          console.log('nextPiece');
          this.beat.startTime += this.beat.pieceLen;
        }
      }, 20);
    }
  }

  stopBeat() {
    this.beat.notes = [];
  }

  nextPiece() {
    const notes = this.beat.notes;
    for (var n = 0; n < notes.length; n++) {
      const beat = notes[n];
      for (var i = 0; i < beat.length; i++) {
        if (beat[i]) {
          this.player.queueWaveTable(
            this.audioContext,
            beat[i].gain, beat[i].preset,
            this.beat.startTime + n * this.beat.len,
            beat[i].pitch, beat[i].duration, this.beat.volume
          );
        }
      }
    }
  }

  playNote(pitch, volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _tone_0090_JCLive_sf2_file, 0, pitch, 0.75, vol);
  }

  playSnare(volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _drum_40_6_JCLive_sf2_file, 0, 35, 3, vol);
  }

  playHihat(volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _drum_46_6_JCLive_sf2_file, 0, 35, 3, vol);
  }

  playBassDrum(volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _drum_36_6_JCLive_sf2_file, 0, 36, 3, vol);
  }

  playTom(volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _drum_48_6_JCLive_sf2_file, 0, 35, 3, vol);
  }

  playRide(volume) {
    const vol = volume || 1.0;
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, _drum_51_6_JCLive_sf2_file, 0, 51, 3, vol);
  }

  playDrumsWithLabel(label, volume) {
    if(label === 'snare') this.playSnare(volume);
    else if(label === 'tom') this.playTom(volume);
    else if(label === 'hihat') this.playHihat(volume);
    else if(label === 'ride') this.playRide(volume);
    else if(label === 'bassdrum') this.playBassDrum(volume);
  }


  render() {
    return (
      <div>
        {_.map(scriptList, scr => (
          <Script url={scr} onLoad={this.handleScriptLoad.bind(this)} key={scr}/>
        ))}
      </div>
      );
  }

}