var Stack = function() { // first in last out
 // debugger;
  var stack = {
    front: 0,
    back: 0,
    storage: {}
  }
  
  _.extend(stack, stackMethods);
   // stack.push = stackMethods.push;
   // stack.pop = stackMethods.pop;
   // stack.size = stackMethods.size;
  
  return stack;
};

var stackMethods = {
  push: function(value) { // add to end
    debugger;
    this.storage[this.back] = value;
    this.back = this.back + 1;
  },
  pop: function() { // remove from end
    debugger;
    this.back = this.back - 1;
    return this.storage[this.back]; 
  },
  size: function() {
    var size = this.back - this.front;
    if (size < 0) {
      return 0;
    }
    return size;
  }
};

// var myObj = Stack();
// myObj.push('a');



