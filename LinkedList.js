
export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.length = 1;
		this.tail = this.head;
	}

	log() {
		let current = this.head
		while (current) {
			console.log(current.value);
			current = current.next
		}
	}

	append(value) {
		let newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	appendNodes(nodesArr) {
		nodesArr.forEach(nodeVal => this.append(nodeVal))
	}

	findLoopStartNode(head) {
		let slow = head;
		let fast = head;

		while (fast !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) { //Коллизия
				break;
			}
		}

		if (fast === null || fast.next === null) {
			return null;
		}

		slow = head;
		while (slow !== fast) {
			slow = slow.next;
			fast = fast.next;
		}

		return fast;
	}

	removeHead(){
		this.head = this.head.next;
		this.length--
	}

	removeDuplicates() {

		if (!this.head) {
			return null;
		}

		let deletedNode = null;
		let currentNode = this.head;

		const dict = {}

		if (currentNode !== null) {
			let lol = currentNode
			while (lol) {
				if (!dict[lol.value]) {
					dict[lol.value] = 1
				} else dict[lol.value]++
				lol = lol.next
			}
		}

		if (currentNode !== null) {
			while (currentNode.next) {
				const value = currentNode.next.value
				if (dict[value] > 1) {
					dict[value]--
					this.length--
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		return deletedNode;
	}

	findNthFromLast(n) {
		if (n < 1) throw new Error("Arg should be a positive number")
		if (this.length < n) throw new Error("Out of range")
		let temp = this.head
		for (let i = 1; i < this.length - n + 1; i++) temp = temp.next;
		return temp
	}

	appendNonZeroMatrixValues (matrix)  {
		const rows = matrix.length
		for (let i = 0; i < rows; i++) {
			const cols = matrix[i].length
			for (let j = 0; j < cols; j++) {
				if (matrix[i][j] === 0) continue
				this.append({
					rowIndex: i,
					colIndex: j,
					value: matrix[i][j]
				})
				if (i === rows && j === cols) this.tail.next = null
			}
		}
	}
}
