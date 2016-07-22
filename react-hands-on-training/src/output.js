'use strict';

import React from 'react';
import ReactDom from 'react-dom';

class output extends React.Component {
	render () {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default output;
