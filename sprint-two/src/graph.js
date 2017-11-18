// Instantiate a new graph
var Graph = function() { //constant
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { //constant
  this.nodes[node] = node; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //constant
  if (this.nodes[node]) {  
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //linear
  for (var key in this.edges) { 
    if (this.edges[key] === node || key === node.toString()) {
       this.edges[key] = [];
    }
  }
  //this.nodes[node] = ;
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

// .addEdge(5, 4) will lable 5 is the fromNode and 4 as the toNode
// but since edges are symmetrical, an edge from 5 to 4 would also be an edge from 4 to 5
// so .hasEdge(4, 5), with 4 being the fromNode and 4 being the toNode should return true

Graph.prototype.hasEdge = function(fromNode, toNode) { // linear x 2
  for (var key in this.edges) {
    if (this.edges[key][0] === fromNode && this.edges[key][1] === toNode) {
      return true;
    }
    if (this.edges[key][1] === fromNode && this.edges[key][0] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.changeEdge = function(fromNode, dropNode, newNode) { // linear x 2
  for (var key in this.edges) {
    if (this.edges[key][0] === fromNode && this.edges[key][1] === dropNode) {
      this.edges[key][1] = newNode;
    }
    if (this.edges[key][1] === fromNode && this.edges[key][0] === dropNode) {
      this.edges[key][0] = newNode;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //constant 
  //debugger;
  this.edges[fromNode] = [fromNode, toNode]; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //constant
  this.edges[fromNode] = [];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // linear
  for (var key in this.nodes) { 
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
