var Stack = function() { // first in first out
  var stack = Object.create(stackMethods);

  stack.front = 0;
  stack.back = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {
  push: function(value) { // add to back
    this.storage[this.back] = value;
    this.back = this.back + 1;
  },
  pop: function() { // remove from back
    this.back = this.back - 1;
    return this.storage[this.back];
  },
  size: function() {
    var size = this.back - this. front;
    if (size < 0) {
      return 0;
    }
    return size;
  }
};


