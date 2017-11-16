var Queue = function() { // first in first out
  //debugger;
  var queue = Object.create(queueMethods);
  
  queue.front = 0;
  queue.back = 0;
  queue.storage = {};
  //_.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) { // add to back
    this.storage[this.back] = value;
    this.back = this.back + 1;
  },
  dequeue: function() { // remove from front
    this.front = this.front + 1;
    return this.storage[this.front - 1];
  },
  size: function() {
    var size = this.back - this.front;
    if (size < 0) {
      return 0;
    }
    return size;
  }
};




