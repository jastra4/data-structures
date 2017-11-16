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
    this.children[this.children.length] = Tree(value);
  },
  contains: function(target) {
  	debugger;
    if (this.value === target) {
      return true;
    } 
	for (var i = 0; i < this.children.length; i++) {
	  var test =  this.children[i].contains(target);
	  if (test === true) {
	  	return true;
	  }
	}
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */