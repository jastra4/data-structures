var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;
  someInstance.enqueue = function(value) { //add to end
    storage[back] = value;
    back++; 
  };

  someInstance.dequeue = function() { //remove from start
    front++;
    return storage[front - 1];
  };

  someInstance.size = function() {
    var size = back - front;
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
