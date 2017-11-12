import React, {Component} from 'react';
import './Track.css';


class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }

 addTrack() {
   this.props.onAdd(this.props.track);
 }

 removeTrack() {
   this.props.onRemove(this.props.track)
 }

renderPlayPause() {
  let play = false;
  if (!play) {
    console.log("Audio is playing!");
    return <button className="Track-sample" onClick={this.playAudio}> &#x25b6; </button>;
  } else {
    console.log("Audio is stopped!");
    return <button className="Track-sample" onClick={this.stopAudio}> &#x23f8; </button>;
  }
}

 playAudio() {
  //  this.props.playAudio(this.props.track)
 }

 stopAudio() {
  //  this.props.stopAudio(this.props.track)
 }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
            <div className="Track-image"><img src={this.props.track.image} /></div>
              <div className="Track-name"><h3>{this.props.track.name}</h3><br />
                <div className="Track-artist-album"><p><span className="trackCat">artist:</span> {this.props.track.artist} <br />
                  <span className="trackCat">album:</span> {this.props.track.album} </p>
                </div>
                <div className="Track-sample-div">
                  {this.renderPlayPause()}
                </div>
              </div>
        </div>
          <div className="Track-add-remove">
            { this.props.onAdd ?
              <a className="Track-action" onClick={this.addTrack}>+</a>
              :
              <a className="Track-action" onClick={this.removeTrack}>-</a>
            }
          </div>
      </div>
    );
  }
}

export default Track;
