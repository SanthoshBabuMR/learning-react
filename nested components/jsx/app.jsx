(function() {
	'use strict';

	var Outer = React.createClass({
		render: function () {
			return 	<div>
								<h2>Outer</h2>
								<Inner />
							</div>;
		}
	});

	var Inner = React.createClass({
		render: function () {
			return 	<div>
								<h3>Inner</h3>
							</div>;
		}
	});

	ReactDOM.render( 
			<Outer />,
			document.getElementById('App')
	);

})();	

