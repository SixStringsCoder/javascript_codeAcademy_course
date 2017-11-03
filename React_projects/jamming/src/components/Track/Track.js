import React, {Component} from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRemoval: false,
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

 renderAction() {
   if (this.state.isRemoval) {
     return '<a className="Track-action">+</a>';
   } else {
     return '<a className="Track-action">-</a>';
   }
 }

 addTrack() {
   return this.props.track;
 }

 removeTrack() {

 }


  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          <a className="Track-action" onClick={this.addTrack}>+</a>
          <a className="Track-action" onClick={this.removeTrack}>-</a>
      </div>
    );
  }
}

export default Track;
