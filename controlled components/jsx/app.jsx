(function() {
  'use strict';

  var App = React.createClass({
    getInitialState: function () {
      return {
        init: 'init'
      }
    },
    render: function () {
      return <input type="text" value={this.state.init} onChange={this.handleChange} />
    },
    handleChange: function(e) {
      this.setState({init : e.target.value});
    }
  });

  ReactDOM.render( 
    <App />,
    document.getElementById('App')
  );

})(); 

