var Queue = function() { // first in first out

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
  //var size = this.back - this.front;
  if ((this.back - this.front) < 0) {
    return 0;
  }
  return (this.back - this.front);
}

//var queue = new Queue(queueMethods);
