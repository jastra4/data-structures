var Queue = function() { // first in first out
  // var queue = Object.create(queueMethods) ///// prototypal
  this.storage = {};
  this.front = 0;
  this.back = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back = this.back + 1;
}
Queue.prototype.dequeue = function() {
  this.front = this.front + 1;
  return this.storage[this.front - 1];
}
Queue.prototype.size = function() {
  var size = this.back - this.front;
  if (size < 0) {
    return 0;
  }
  return size;
}

//var queue = new Queue(queueMethods);
