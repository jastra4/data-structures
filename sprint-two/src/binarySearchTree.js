var BinarySearchTree = function(value) { //functional-shared
  var binaryTree = {};
  
  binaryTree.value = value;
  binaryTree.right = null; // value of greater child
  binaryTree.left = null; // value of lesser child
  _.extend(binaryTree, binaryTreeMethods);

  return binaryTree;
};

var binaryTreeMethods = {
  insert: function(value) {
  	if (value === 's') {debugger}
    if (value > this.value) {  // check right side
      if (this.right === null) {
        this.right = BinarySearchTree(value); // add node
      } else {
      	this.right.insert(value); //recursion
      }
    } else if (value < this.value) { // check left side
      if (this.left === null) {
        this.left = BinarySearchTree(value); // add node
      } else {
      	this.left.insert(value); //recursion
      } 
    } else if (value === this.value) { // value already exists or is invalid
      throw new Error('Error: already exists');
    } else {
      return 'Error: invalid value';
    }
  },
  contains: function(value) {
   if (value === this.value) {
     return true;
   } else if (value > this.value && this.right !== null) {
     return this.right.contains(value);
   } else if (value < this.value && this.left !== null) {
   	 return this.left.contains(value) 
   } else {
   	 return false;
   }
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb); 	
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */