import React, {Component} from 'react';

class Track extends Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3><!-- Track Name --></h3>
          <p><!-- Track Artist --> | <!-- Track Album --> </p>
        </div>
          <a class="Track-action"><!-- add a plus or minus here --></a>
      </div>
    );
  }
}

export default Track;
