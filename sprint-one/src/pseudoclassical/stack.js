var Stack = function() { // first in first out

  this.storage = {};
  this.front = 0;
  this.back = 0;

};

Stack.prototype.push = function(value) { // add to back
  this.storage[this.back] = value;
  this.back = this.back + 1;
}
Stack.prototype.pop = function() { // remove from back
  this.back = this.back - 1;
  return this.storage[this.back];
}
Stack.prototype.size = function() {
  if ((this.back - this.front) < 0) {
  	return 0;
  }
  return (this.back - this.front);
}


