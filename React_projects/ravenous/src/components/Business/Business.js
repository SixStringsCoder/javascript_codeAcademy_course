/*
The <Business /> component represents how a business (i.e. a restaurant)
in Ravenous will be formatted and styled.
created by Steve Hanlon Oct 15, 2017
*/

import React from 'react';
import './Business.css';

// React component called Business
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt={this.props.business.name} />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p><a href="https://www.google.com/maps" target="_blank">{this.props.business.address}</a></p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">Rating: {this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
