var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild: function(value) {

  },
  contains: function(target) {

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
