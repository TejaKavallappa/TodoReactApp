var _todos = [];
var _callbacks = [];

var TodoStore = {

  changed: function() {
    for(var i = 0; i < _callbacks.length; i++){
      _callbacks[i]();
    }
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    var idx = _callbacks.indexOf(cb);
    _callbacks.splice(idx, 1);
  },

  all: function(){
    return _todos.slice();
  },

  fetch: function(){
    var store = this;
    $.ajax ({
      type: 'GET',
      url: 'api/todos',
      success: function(resp){
        _todos = resp; //NOT SURE! Do we need 'this'?
        store.changed();
      }
    });
  },

  create: function(data){
    console.log(data);
    var store = this;
    $.ajax({
      type: 'POST',
      url: 'api/todos',
      data: {todo: data},
      success: function(resp){
        _todos.push(resp);
        store.changed();
      }
    });
  },

  destroy: function(id){
    var found = false;
    var targetIndex;
    var store = this;

    for(var i = 0; i < _todos.length; i++){
      if(id === _todos[i].id){
        targetIndex = i;
        found = true;
        break;
      }
    }

    if(found){
      $.ajax({
        type: 'DELETE',
        url: 'api/todos/' + id,
        success: function(){
          _todos.splice(targetIndex , 1);
          store.changed();
        }
      });
    }
  },

  toggleDone: function(id){
    var found = false;
    var targetIndex;
    var target;
    var store = this;

    for(var i = 0; i < _todos.length; i++){
      if(id === _todos[i].id){
        target = _todos[i];
        targetIndex = i;
        found = true;
        break;
      }
    }

    target.done = !(target.done);

    if(found){
      $.ajax ( {
        type: 'PATCH',
        url: 'api/todos/' + id,
        data: {todo: target},
        success: function() {
          _todos[targetIndex] = target;
          store.changed();
        }
      });
    }
  }
};

module.exports = TodoStore;
