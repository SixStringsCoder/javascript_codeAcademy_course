/*
component is to simulate what a returned list of businesses would look like
in Ravenous (after querying the Yelp API, for example).
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
          return <Business business={business}/>;
        })
      }
      </div>
    );
  }
}

// exporting because this component will need to be rendered by another component
export default BusinessList;
