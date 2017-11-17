

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  //use hashing function to convert k to an index
  //call .set(index, v) on storage
  this._storage.set(index, v)
};

HashTable.prototype.retrieve = function(k) {
	//debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  //call .get(index) on storage
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, )
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


