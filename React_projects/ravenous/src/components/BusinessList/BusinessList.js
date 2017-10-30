/*
This is a restaurant search app called Ravenous which queries the Yelp API for results.
This app uses React 16, ES 6, and fetch()
created by Steve Hanlon Oct 15, 2017
*/

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
      {
        this.props.businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })
      }
      </div>
    );
  }
}

// exporting because this component will need to be rendered by another component
export default BusinessList;
