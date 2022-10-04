
const last = (stack) => {
	return stack[stack.length - 1]
}

class MinStack {
	constructor() {
		this.stack = []
		this.minStack = []
	}
	push(val) {

		if (this.minStack.length === 0 || val <= last(this.minStack))
			this.minStack.push(val)
		this.stack.push(val)
	}
	pop() {
		if (last(this.stack) === last(this.minStack)) {
			this.minStack.pop()
		}
		return this.stack.pop()
	}
	top() {
		return last(this.stack)
	}
	getMin() {
		return last(this.minStack)
	}
}

const minStack = new MinStack()
minStack.push(30)
minStack.push(25)
minStack.push(10)
minStack.push(20)
minStack.push(15)
console.log(minStack.getMin());