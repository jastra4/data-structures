var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var front = 0;
  var back = 0;

  var storage = {};

  queueMethods.enqueue = function(value) {
  	storage[back] = value
    back++;
  }
  queueMethods.dequeue = function() {
    front++;
    return storage[front - 1];  
  }
  queueMethods.size = function() {
    var size = back - front;
    if (size < 0) {
      return 0;
    }
    return size;
  }
  return queueMethods;
};

var queueMethods = {};


