(function() {
	'use strict';


	var Box = React.createClass({
		propTypes: {
			msg: React.PropTypes.string.isRequired,
			age: React.PropTypes.oneOf([20, 30, 40]),
			count: function(props, propName, componentName) {
				if( props[propName] < 5 ) {
					throw new Error(propName + ' must be 5 or greater');
				}
			}
		},
		render: function() {
			return (
					<div>
						msg:{this.props.msg}
						<br />
						age: {this.props.age}
						<br />
						count: {this.props.count}
					</div> 
				);
		}
	});

	var App = React.createClass({
		render: function () {
			return <Box msg={'hello world'} age={40} count={56}/>;
		} 
	});

	ReactDOM.render( 
			<App />,
			document.getElementById('App')
	);

})();	

