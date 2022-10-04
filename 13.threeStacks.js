// stackIndex + stack size * count of stacks

// Indexes per stack:
// first: 0,3,6 ...
// second: 1,4,7 ...
// third: 2,5,8 ...

// first stack
// 0 + 0 * 3 = 0
// 0 + 1 * 3 = 3
// 0 + 2 * 3 = 6
// second stack
// 1 + 0 * 3 = 1
// 1 + 1 * 3 = 4
// 1 + 2 * 3 = 7
// etc...

class ThreeStacks {
	constructor() {
	  this.stacks = [];
	  this.stackSizes = [0,0,0]
	  this.STACKS_COUNT = 3
	}

	
	peek(i) {
	  return this.stacks[i+(this.stackSizes[i]-1)*this.STACKS_COUNT];
	}
	
	pop(i) {
	  if (this.stackSizes[i] > 0) {
		return this.stacks.splice(
		  i + (--this.stackSizes[i]) * this.STACKS_COUNT, 1, null
		);
	  }
	}
	
	push(i, elem) {
	  if (this.stackSizes[i] >= 0) {
		this.stacks[i+(this.stackSizes[i]++)*this.STACKS_COUNT] = elem;
	  }
	}
  }
  
  const tripleStack = new ThreeStacks();
  tripleStack.push(0, "banana");
  tripleStack.push(2, "apple");
  tripleStack.push(1, "watermelon");
  tripleStack.push(3, "watermelon");
  tripleStack.push(2, "jackfruit");
  tripleStack.pop(0);
  tripleStack.pop(2);
  console.log(tripleStack.peek(0));
  console.log(tripleStack.peek(1));
  console.log(tripleStack.peek(2));
  console.log("sizes of each stack", tripleStack.stackSizes);

