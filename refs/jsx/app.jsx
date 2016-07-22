(function() {
	'use strict';

	var App = React.createClass({
		render: function (){
			return (
					<input type="text" ref="inp" />
				);
		},
		componentDidMount: function () {
			//console.log(this.refs)
			ReactDOM.findDOMNode(this.refs.inp).value = 'set by ref';
		}
	});

	ReactDOM.render( 
			<App />,
			document.getElementById('App')
	);

})();	

