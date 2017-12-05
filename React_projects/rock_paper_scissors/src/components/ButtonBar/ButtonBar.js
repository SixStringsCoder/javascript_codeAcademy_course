import React from 'react';
import './ButtonBar.css';
import Button from '../Button/Button';

class ButtonBar extends React.Component {
  render() {
    return (
        <Button theChoice={this.props.theChoice}
                playAgain={this.props.playAgain}
                />
    );
  }
}

export default ButtonBar;
