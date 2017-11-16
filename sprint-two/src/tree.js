var Tree = function(value) {

  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // make it an array, and make addChild push newtree object into the array
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children[this.children.length] = Tree(value).value;
  },
  contains: function(target, obj) {
  	debugger;
  	var tree = obj || this;
    if (tree.value === target) {
      return true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i] === target) {
      	return true;
      }
      //tree.contains(target, tree.children[i]);
    }

    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var Tree = function(value) {

//   var newTree = {};
//   newTree.value = value;

//   // your code here
//   newTree.children = {};  // make it an array, and make addChild push newtree object into the array
//   _.extend(newTree, treeMethods);
//   return newTree;
// };

// var treeMethods = {
//   addChild: function(value) {
//   	var count = 0;
//   	for (var key in this.children) {
//       count++;
//   	}
//     this.children[count] = Tree(value).value;
//   },
//   contains: function(target, obj) {
//   	tree = obj || this;
//     if (tree.value === target) {
//       return true;
//     }
//     for (var key in tree) { // change to for loop after making children array
//       tree.contains(target, tree[key]);
//     }
//     return false;
//   }
// };