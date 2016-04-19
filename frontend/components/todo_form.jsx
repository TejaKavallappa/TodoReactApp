var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({

  getInitialState: function(){
    return {title: "", body: "", done: false};
  },

  updateTitle: function(e) {
    this.setState({title: e.currentTarget.value});
  },
  updateBody: function(e) {
    this.setState({body: e.currentTarget.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    TodoStore.create(this.state);
    this.setState({
      title: "",
      body: ""
    });

  },
  render: function(){
    return (<form onSubmit={this.handleSubmit}>
      <label> Title
      <input type="text" value={this.state.title} onChange={this.updateTitle}/>
      </label>
      <label> Body
      <input type="text" value={this.state.body} onChange={this.updateBody}/>
      </label>

      <input type="submit" value="Add todo item"/>
      </form>
    );
  }
});

module.exports = TodoForm;
