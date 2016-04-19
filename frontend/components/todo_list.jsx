var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('./todo_list_item');
var TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function(){
    return { list: TodoStore.all() };
  },
  todosChanged: function(){
    this.setState({ list: TodoStore.all() });
  },
  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  render: function(){
    return (
      <div className="todo_list">
          { this.state.list.map(function(el, i){
            return <TodoListItem key={i} item={el}/>;
          })
        }
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
