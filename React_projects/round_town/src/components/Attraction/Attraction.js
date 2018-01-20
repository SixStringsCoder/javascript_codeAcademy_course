import React, { Component} from 'react';
import './Attraction.css'

class Attraction extends Component {
  render() {
    return (
        <div className="venue" id="venue1">
          <div className="topInfo">
            <h2>{this.props.venue.name}</h2>
            <img className="venueimage" src={this.props.venue.pic} alt={this.props.venue.name} />
            <h4>{this.props.venue.category} <br />Rating: {this.props.venue.rating}&nbsp; &#10084;</h4>
          </div>
          <div className="bottomInfo">
            <p>{this.props.venue.address}</p>
            <p>{this.props.venue.city}, {this.props.venue.state}</p>
            <p>{this.props.venue.country} {this.props.venue.postalCode}</p>
            <button id="venueMap"><a href={this.props.venue.website} target="_blank">Website</a></button>
          </div>
        </div>
    );
  }
}

export default Attraction;
