var React = require('react');
var TodoStore = require('../stores/todo_store');
var DoneButton = require('./done_button');
var TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function(){
    return { revealed: false };
  },
  revealDetails: function(e){
    e.preventDefault();
    this.setState({ revealed: !(this.state.revealed) });
  },
  handleDestroy: function(e){
    e.preventDefault();
    TodoStore.destroy(this.props.item.id);
  },
  render: function(){
    var detail = "";
    if(this.state.revealed){
      detail = <TodoDetailView item={this.props.item}/>;
    }

    return (
      <div className="todo_list_item">
        <div onClick={this.revealDetails}>{this.props.item.title}</div>
        { detail }
        <DoneButton item={this.props.item}/>
    </div>
    );
  }
});

module.exports = TodoListItem;
