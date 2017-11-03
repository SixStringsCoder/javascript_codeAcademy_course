import React, {Component} from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {

  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={track}
                      key={track.id}
                      onAdd={this.props.onAdd(this.props.track)}
                      onRemove={this.props.onRemove(this.props.track)}
                    />;
          })
        }

        <div className="Track">
            <div className="Track-information">
              <h3>{/* track name */}</h3>
              <p>{/* artist name */} | {/* album name */}</p>
            </div>
            <a className="Track-action">+</a>
        </div>


        <div className="Track">
            <div className="Track-information">
              <h3>Stronger</h3>
              <p>Britney Spears | Oops!... I Did It Again</p>
            </div>
            <a className="Track-action">-</a>
        </div>

        <div className="Track">
          <div className="Track-information">
            <h3>So Emotional</h3>
            <p>Whitney Houston | Whitney</p>
          </div>
          <a className="Track-action">-</a>
        </div>

        <div className="Track">
          <div className="Track-information">
            <h3>It's Not Right But It's Okay</h3>
            <p>Whitney Houston | My Love Is Your Love</p>
          </div>
          <a className="Track-action">-</a>
        </div>

    </div>
    );
  }
}

export default TrackList;
