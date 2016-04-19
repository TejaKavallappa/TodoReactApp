var TodoList = require('./components/todo_list');
var React = require('react');
var ReactDOM = require('react-dom');

// todoStore = require('./stores/todo_store');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<TodoList />, document.getElementById('root'));
});
