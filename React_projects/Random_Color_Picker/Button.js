import React from 'react';

// Click on a button to pick a new random color based on rgb values.
export class Button extends React.Component {
	render() {
		return (
      // Set onClick's value equal to the passed-in prop for the Button instance in Random.js
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Refresh
			</button>
		);
	}
}
