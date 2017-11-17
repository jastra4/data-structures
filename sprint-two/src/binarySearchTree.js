var BinarySearchTree = function(value) { //functional-shared
  var binaryTree = {};
  
  binaryTree.value = value;
  binaryTree.right = null; // value of greater child
  binaryTree.left = null; // value of lesser child
  binaryTree.children = [];
  _.extend(binaryTree, binaryTreeMethods);

  return binaryTree;
};

var binaryTreeMethods = {
  insert: function(value) {
  	// right side
  	if (value === 6) {
  		//debugger;
  	}
    if (value > this.value) {  
      if (this.right === null) {
        this.right = BinarySearchTree(value); // assignment
      //} else if (this.right.value > value) {
        //var temp = this.right; 
        //this.right = BinarySearchTree(value); // assignment
        //this.right.right = temp; 
      } else {
      	this.right.insert(value); //recursion
      }
    // left side
    } else if (value < this.value) { 
      if (this.left === null) {
        this.left = BinarySearchTree(value); // assignment
      //} else if (this.left.value < value) {
        //var temp = this.left;
        //this.left = BinarySearchTree(value); // assignment
        //this.left.left = temp;
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

// var binaryTreeMethods = {
//   insert: function(value) {
//   	// right side
//   	if (value === 6) {
//   		debugger;
//   	}
//     if (value > this.value) {  
//       if (this.right === null) {
//         this.right = BinarySearchTree(value); // assignment
//       } else if (this.right.value > value) {
//         var temp = this.right; 
//         this.right = BinarySearchTree(value); // assignment
//         this.right.right = temp; 
//       } else {
//       	this.right.insert(value); //recursion
//       }
//     // left side
//     } else if (value < this.value) { 
//       if (this.left === null) {
//         this.left = BinarySearchTree(value); // assignment
//       } else if (this.left.value < value) {
//         var temp = this.left;
//         this.left = BinarySearchTree(value); // assignment
//         this.left.left = temp;
//       } else {
//       	this.left.insert(value); //recursion
//       } 
//     // neither
//     } else { 
//       console.log('value already exists');
//       return ;
//     }
//   },
//   contains: function(value) {
//    if (value === this.value) {
//      return true;
//    } else if (value > this.value) {
//      contains(this.right);
//    } else if (value < this.value) {
//    	 contains(this.left) 
//    } else {
//    	 return false;
//    }
//   },
//   depthFirstLog: function() {

//   }
// };