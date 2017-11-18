var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fixed
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // constant time
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // constant time
  if (this._storage[item] === undefined) {
    return false;
  }
  return true;
};

setPrototype.remove = function(item) { // constant time
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions? Constant time
 */
