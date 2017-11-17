var BinarySearchTree = function(value) { //functional-shared
  var binaryTree = {};
  
  binaryTree.value = value;
  binaryTree.right = binaryTree.children[1]; // value of greater child
  binaryTree.left = binaryTree.children[0]; // value of lesser child
  binaryTree.children = [];
  _.extend(binaryTree, binaryTreeMethods);

  return binaryTree;
};

var binaryTreeMethods = {
  insert: function(value) {
  	// right side
  	debugger;
    if (value > this.value) {  
      if (this.right === undefined) {
        this.right === BinarySearchTree(value); // assignment
      } else if (this.right.value > value) {
        var temp = this.right; 
        this.right = BinarySearchTree(value); // assignment
        this.right.right = temp; 
      } else {
      	this.right.insert(value); //recursion
      }
    // left side
    } else if (value < this.value) { 
      if (this.left === undefined) {
        this.left === BinarySearchTree(value); // assignment
      } else if (this.left.value < value) {
        var temp = this.left;
        this.left = BinarySearchTree(value); // assignment
        this.left.left = temp;
      } else {
      	this.left.insert(value); //recursion
      } 
    // neither
    } else { 
      console.log('value already exists');
      return ;
    }
  },
  contains: function(value) {
   if (value === this.value) {
     return true;
   } else if (value > this.value) {
     contains(this.right);
   } else if (value < this.value) {
   	 contains(this.left) 
   } else {
   	 return false;
   }
  },
  depthFirstLog: function() {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// when called, BinarySearchTree creates an object with 
// three properties (left, right, chidlre) and
// three methods (insert, contains, depthFirstLog)

    // if value > this
      // if this.right === undefined 
        // this.right === BinarySearchTree(value);
      // else if this.right > value
        // (handle conflic) temp = this.right, this.right = value, value.right = temp 
      // else this.right.insert(value);
    // else if value < node
      // if this.left === undefined 
        // this.left === BinarySearchTree(value);
      // else if this.left < value
        // (handle conflic) temp = this.left, this.left = value, value.left = temp
      // else this.left.insert(value);
    // else
      // stop and return message "already exists"