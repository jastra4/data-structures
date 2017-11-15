var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var size = 0;
  stackMethods.push = function(value) {
    size++;
    return stackMethods[size] = value;
  
  };

  stackMethods.pop = function() {
    size--;
    return stackMethods[size + 1];
  };

  stackMethods.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return stackMethods;
};

var stackMethods = {};



