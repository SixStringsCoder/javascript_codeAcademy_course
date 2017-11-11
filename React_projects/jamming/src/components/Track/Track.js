import React, {Component} from 'react';
import './Track.css';


class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

 addTrack() {
   this.props.onAdd(this.props.track);
 }

 removeTrack() {
   this.props.onRemove(this.props.track)
 }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <div className="Track-image"><img src={this.props.track.image} /></div>
            <div className="Track-name"><h3>{this.props.track.name}</h3><br />
            <div className="Track-artist-album"><p><strong>artist:</strong> {this.props.track.artist} <br />
              <strong>album:</strong> {this.props.track.album} </p>
            </div>
            <div className="Track-sample">
              <audio controls name="media">
                <source src={this.props.track.preview} type="audio/mpeg" />
              </audio>
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
