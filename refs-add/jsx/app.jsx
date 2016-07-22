(function() {
  'use strict';

  var Add = React.createClass({
    getInitialState: function () {
      return {
        total: ''
      }
    },
    addInput: function (e) {
      e.preventDefault();
      var inp1 = ReactDOM.findDOMNode( this.refs.inp1 ).value;
      var inp2 = ReactDOM.findDOMNode( this.refs.inp2 ).value;
      this.setState({
        total: parseFloat(inp1, 10) + parseFloat(inp2, 10)
      })
    },
    render: function () {
      return (
          <form>
            <input type="text" ref="inp1" />
            <br />
            <input type="text" ref="inp2" />
            <br />
            <input type="submit" onClick={this.addInput} />
            <Output msg={this.state.total}/>
          </form>
        );
    }
  });

  var Output = React.createClass({
    render: function () {
      return <div>{this.props.msg}</div>
    }
  });

  var App = React.createClass({
    render: function (){
      return (
          <Add />
        );
    }
  });

  ReactDOM.render( 
      <App />,
      document.getElementById('App')
  );

})(); 

