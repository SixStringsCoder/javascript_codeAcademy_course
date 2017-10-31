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
