var Queue = function() {
 // debugger;
  var queue = {
    front: 0,
    back: 0,
    storage: {}
  };

  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  queue.size = queueMethods.size;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back = this.back + 1;
  },
  dequeue: function() {
    this.front = this.front + 1;
    return this.storage[this.front - 1];  
  },
  size: function() {
    debugger;
    var size = this.back - this.front;
    if (size < 0) {
      return 0;
    }
    return size;
  }
};

// var myObj = Queue();

// myObj.enqueue('a');

// extending properties saves you from having to add each one individually.

// var giraffeMaker = function(name, height) {
//   var newGiraffe = {};
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   newGiraffe.hunger = 10;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);

//   return newGiraffe;
// };

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// giraffeMaker.giraffeMethods = {};


// giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
//     return this.height > treeHeight;
//   };

// giraffeMaker.giraffeMethods.isHungry = function() {
//   return this.hunger > 0;
// };

// giraffeMaker.giraffeMethods.say = function(option) {
//   var sentences = {
//     'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
//     'notHungry': this.name + ' is not hungry.',
//     'notTallEnough': this.name + ' is too short to reach the trees.',
//     'ate': 'That was delicious!'
//   };

//   return console.log(sentences[option]);
// };

// giraffeMaker.giraffeMethods.eat = function() {
//   if (this.isHungry()) {
//     this.hunger -= this.height;
//     this.say('ate');
//   } else {
//     this.say('notHungry');
//   }
// };

// giraffeMaker.giraffeMethods.browse = function() {
//   if (this.isTallEnough(2)) {
//     this.eat();
//   } else {
//     this.say('notTallEnough')
//   }
// };

