var React = require('react');
var TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  handleDone: function(e){
    e.preventDefault();
    TodoStore.toggleDone(this.props.item.id);
  },

  render: function(){
    var buttonText = this.props.item.done ? "UNDO" : "DONE";
    return(
      <button onClick={this.handleDone}>{buttonText}</button>
    );
  }
});

module.exports = DoneButton;
