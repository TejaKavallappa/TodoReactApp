var React = require('react');
var TodoListItem = require('./todo_list_item');

var TodoDetailView = React.createClass({
  render: function(){
    return(
      <div>
        <div>{this.props.item.body}</div>
        <button onClick={TodoListItem.handleDestroy}>DELETE</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
