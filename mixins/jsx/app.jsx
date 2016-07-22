(function() {
	'use strict';


	var HighLight = {
		componentDidUpdate: function(){
			var node = document.getElementsByTagName('div')[0];
			$(node).slideUp();
			$(node).slideDown();
		}
	};

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
		},
		mixins: [HighLight]

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

