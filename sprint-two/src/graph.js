

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  debugger;
  for (var key in this.edges) {
    if (this.edges[key] === node || key === node.toString()) {
       delete this.edges[key];
    }
  }
  //delete this.edges[node];
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //debugger;
  //if (this.edges[toNode] === fromNode && this.edges[fromNode] === toNode) {
  if (this.edges[fromNode] === toNode) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { 
  //undirected graph = edges have symetrical relationship
  //an edge added to one should be added to the other
  this.edges[fromNode] = toNode; 
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
  // for (var key in this.edges) {
  //   if (this.edges[key] === node || key === node) {
  //      delete this.edges[node];
  //   }
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  //debugger;
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

// var graph = Graph();
// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(4, 5);
// graph.hasEdge(4, 5);
// graph.removeNode(4, 5);
// graph.hasEdge(4, 5);

/*
 * Complexity: What is the time complexity of the above functions?
 */
