// Array
// Access	Insert/Remove(beginning)	(end)		(middle)
// O(1)		O(n)						O(1)		O(n)	


// Linked List
// Access	Insert/Remove(beginning)	(end)		(middle)
// O(n)		O(1)/O(n)					O(1)/O(n)	O(1)/O(n)	

// Linked List Insert/Remove:
// O(1) if you already have a reference to the node you want to insert after.
// O(n) iterate to find

// LL vs. Array
// In order to have better insertion and deletion guarantees,
// a linked list is more suitable, because it requires no shifting of elements
// as contiguity and random access aren't its properties.


import { LinkedList } from "./LinkedList.js"
import { measurePerformance } from "./utils/measurePerformance.js"

const log = logs()
const elementsCount = 100000
const middlePosition = elementsCount / 2

let ll = new LinkedList(1)
ll.appendNodes(new Array(elementsCount - 1).fill(1))
let array = new Array(elementsCount).fill(1)

log.next()
const t1 = measurePerformance(() => {
	for (let i = 0; i < elementsCount; i++) {
		ll.removeHead()
	}
})
log.next()
const t2 = measurePerformance(() => {
	for (let i = 0; i < elementsCount; i++) {
		array.shift()
	}
})
log.next()

ll = new LinkedList(1)
ll.appendNodes(new Array(elementsCount - 1).fill(1))
array = new Array(elementsCount).fill(1)
log.next()
const t3 = measurePerformance(() => {
	for (let i = 0; i < elementsCount; i++) {
		ll.findNthFromLast(middlePosition)
	}
})
log.next()
const t4 = measurePerformance(() => {
	for (let i = 0; i < elementsCount; i++) {
		array[middlePosition] = Math.random()
	}
})
log.next()

/* 
	Use array if you need: 
		random access, 
		only insertions/deletions in the end

	Use linked lists if you need: 
		insertions/deletions (and we know the element)
*/








function* logs() {
	yield console.log(
		" Linked list insertion..",
	);
	yield console.log(
		"---------------------------------------\n",
		"Array insertion (not in the end).."
	);
	yield console.log(
		"--------------------------------------- \n",
		`Difference: ${(t2 - t1).toFixed(2)} ms (${(t2 / t1).toFixed()} times) \n \n`,
	);
	yield console.log(
		" Linked list access the middle element..",
	);
	yield console.log(
		"---------------------------------------\n",
		"Array access the middle element.."
	);
	yield console.log(
		"--------------------------------------- \n",
		`Difference: ${(t3 - t4).toFixed(2)} ms (${(t3 / t4).toFixed()} times)`
	);
}

