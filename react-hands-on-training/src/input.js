'use strict';

import React from 'react';
import ReactDom from 'react-dom';

class InputBox extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			value: this.props.keyValue
		}
		this.eventHandler = (e) => this._eventHandler (e);
	}

	_eventHandler (e) {
		this.props.valueBack(e.target.value)
		this.setState({
			value: e.target.value
		})
	}

	render () {
		return (
			<div>
				<input type="text" ref="input" value={this.state.value} onChange={this.eventHandler}/>
				<output></output>
			</div>
		);
	}
}

export default InputBox;
