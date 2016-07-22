(function() {
	'use strict';


	var Count = React.createClass({
		getInitialState: function () {
			var self = this;
			var state = {
				counter: 1
			}
			setInterval( function () {
				self.setState({
					counter: self.state.counter+1
				})
			}, 1000);
			return state;
		},
		render: function () {
			return (
								<div>
									<h1>Counter</h1>
									<p>{this.state.counter}</p>
								</div>
				);
		}
	});

	var App = React.createClass({
		render: function () {
			return ( <div>
									<Count />
								</div>
							);

		} 
	});

	ReactDOM.render( 
			<App />,
			document.getElementById('App')
	);

})();	

