var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head !== null) { //if head not empty, start there
      var currentNode = list.head;
      while (currentNode.next) { //move over entire linked list
        currentNode = currentNode.next;
      }
      list.tail = Node(value); //make new tail
      currentNode.next = list.tail; //make last tail point to new tail
    } else {
      list.tail = Node(value); //make new tail
      list.head = list.tail; //head and tail are the same in a linked list of 1
    }
  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (list.tail.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
