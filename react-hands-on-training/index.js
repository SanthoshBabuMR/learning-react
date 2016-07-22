'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import InputBox from './src/input.js';

class Example extends React.Component {

	constructor () {
		super();
		this.state = {
			output: ''
		};
		this.setValue = (val) => this._setValue (val); 
	}

	_setValue (val) {
		this.setState ({
			output: val
		})
	}

	render () {
		return (
			<span>
				<InputBox keyValue={"hello"} valueBack={this.setValue}/>
				<div>{this.state.output}</div>
			</span>
			);
	}
}

ReactDom.render(
	React.createElement(Example),
	document.getElementById('reactTrainingExample')
);

