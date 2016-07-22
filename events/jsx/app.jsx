(function() {
	'use strict';

	var App = React.createClass({
		handle: function(e) {
			console.log(e.target.value)
		},
		render: function (){
			return (
					<input type="text" onChange={this.handle} />
				);
		}
	});

	ReactDOM.render( 
			<App />,
			document.getElementById('App')
	);

})();	

