import React, { Component} from 'react';
import './Attraction.css'

class Attraction extends Component {
  render() {
    return (
        <div className="venue" id="venue-{this.props.venue.name}">
          <div className="topInfo">
            <h2>{this.props.venue.name}</h2>
            <img className="venueimage" src={this.props.venue.pic} alt={this.props.venue.name} />
            <h4>{this.props.venue.category} <br />Rating: {this.props.venue.rating}&nbsp; &#10084;</h4>
            <p><strong>Hours:</strong> {this.props.venue.hours} </p>
          </div>
          <div className="bottomInfo">
            <p>{this.props.venue.address}<br />
            {this.props.venue.city}, {this.props.venue.state}<br />
            {this.props.venue.country} {this.props.venue.postalCode}</p>
            <button id="venueMap"><a href={this.props.venue.website} target="_blank">Website</a></button>
          </div>
        </div>
    );
  }
}

export default Attraction;
