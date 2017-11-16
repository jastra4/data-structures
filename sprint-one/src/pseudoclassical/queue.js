var Queue = function() { // first in first out
  // var queue = Object.create(queueMethods) ///// prototypal
  this.storage = {};
  this.front = 0;
  this.back = 0;

  this.enqueue = function(value) { // add to back
    this.storage[this.back] = value;
    this.back = this.back + 1;
  }
  this.dequeue = function() { // remove from front
    this.front = this.front + 1;
    return this.storage[this.front - 1];
  }
  this.size = function() {
  	var size = this.back - this.front;
  	if (size < 0) {
      return 0;
  	}
    return size;
  }

  return queue;
};

// var queueMethods = { // add to back
//   enqueue: function(value) {
//     this.storage[this.back] = value;
//     this.back = this.back + 1;
//   },
//   dequeue: function() { // remove from front
//     this.front = this.front + 1;
//     return this.storage[this.front - 1];
//   },
//   size: function() {
//     var size = this.back - this.front;
//     if (size < 0) {
//       return 0;
//     }
//     // return size; //// prototypal
//   }
// }

var queue = new Queue(queueMethods);
