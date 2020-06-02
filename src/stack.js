const stack = function Stack() {
  var collection = [];
  var count = 0;
  this.print = function () {
    return collection
  };
  // Only change code below this line
  this.push = (value) => {
    collection[count] = value;
    count++
  }

  this.pop = () => {
    if (count == 0) {
      return null;
    } else {
      count--;
      delete collection[count - 1];
      return collection;
    }
  }
  this.isEmpty = () => {
    if (collection.length == 0) {
      return true

    } else {
      return false
    }
  }
  this.peek = () => {
    return collection[count - 1];
  }
  this.clear = () => {
    collection = [];
    return collection;
  }
  // Only change code above this line
}
let stack_instance = new stack();
stack_instance.push(1);
stack_instance.push(5);
stack_instance.push(4);
console.log("top most data",stack_instance.peek())
console.log("print collection", stack_instance.print())