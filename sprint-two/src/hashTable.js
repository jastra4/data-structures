var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.resizeTracker = []; // tracks new indexes
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []); // set hash index to mapArray
  }
  this._storage.get(index).unshift([k]);    
  this._storage.get(index)[k] = v;
  this.resizeTracker.push(index);
  if (this.resizeTracker.length > (.75 * this._limit)) {
    this.double(this); // resizes hashTable
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [] )
};

HashTable.prototype.double = function(hashTable) {
  var tempTable = hashTable;
  var allTuples = [];

  // stores old tuples
  tempTable._storage.each(function(bucket, index) { //_storage = hashArray, element = mapArray
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var tupleArray = [];
        tupleArray.push(bucket[i][0]);
        tupleArray.push(tempTable.retrieve(bucket[i][0]));
        allTuples.push(tupleArray);
      }
    }
  }); 

  // modifies hashTable
  hashTable._limit = (tempTable._limit * 2);
  hashTable._storage = LimitedArray(hashTable._limit);
  hashTable.resizeTracker = [];

  // wipes old tuples
  hashTable._storage.each(function(bucket, index, hashTable) {
    if (bucket !== undefined) {
      bucket = [];
    }
  });
  
  // repopulates hashTable
  for (var i = 0; i < allTuples.length; i++) {
    hashTable.insert(allTuples[i][0], allTuples[i][1]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
