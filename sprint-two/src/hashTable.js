var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.storageTracker = []; // tracks new indexes
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []); // set hash index to mapArray
    this.storageTracker.push(index); // keep track of new indexes
  }
  this._storage.get(index).unshift([k]);    
  this._storage.get(index)[k] = v;
  if (this.storageTracker.length >= (.75 * this._limit)) {
    this.double(this); // resizes hashTable
  }
  // if (this._storage.get(index).length >= (.75 * this._limit)) { // check bucket length
  //   this.double(this);
  // }
};

HashTable.prototype.retrieve = function(k) {
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [] )
};

HashTable.prototype.double = function(oldHashTable) {
  //console.log('double ran');
  var newHashTable = new HashTable();
  newHashTable._limit = (oldHashTable._limit * 2);

  // iterate over oldHashTable
  oldHashTable._storage.each(function(element, index, coll) { //_storage = hashArray, element = mapArray
    if (element !== undefined) {
        debugger;
    //console.log(oldHashTable.retrieve('Steven1'));
      for (var i = 0; i < element.length; i++) {
        console.log(element[i][0]);
        console.log(oldHashTable.retrieve(element[i][0]));
        newHashTable.insert(element[i][0], oldHashTable.retrieve(element[i][0]));
      }
    }
  }); 

  hashTable = newHashTable;
  return hashTable;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
