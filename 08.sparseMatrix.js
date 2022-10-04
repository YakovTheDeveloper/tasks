import { LinkedList } from "./LinkedList.js"

// Sparse matrix is a matrix in which most of the elements are zero

// The advantage of using a linked list to represent 
// the sparse matrix is that the complexity of inserting or 
// deleting a node in a linked list is lesser than the array

// Computing time can be saved by logically designing 
// a data structure traversing only non-zero elements

const sparseMatrix = [
	[0, 0, 0, 0],
	[1, 1, 1, 2],
	[0, 0, 0, 0],
	[3, 3, 0, 0],
	[0, 4, 5, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 6, 6, 6],
	[9, 0, 0, 9],
	[0, 0, 0, 0]
]
console.log("Matrix: ", sparseMatrix);

const ll = new LinkedList("Initial node value")
console.log("Initial linked list: ", ll);

ll.appendNonZeroMatrixValues(sparseMatrix)
ll.removeHead() // remove initial node

console.log("Non zero value nodes:");
ll.log()

// Access	 Search		Insertion	Deletion
// O(n)		 O(n)		O(1)/O(n)		O(n)

// Insertion:
// O(1) if you already have a reference to the node you want to insert after.
// O(n) iterate to find

// LL vs. Array
// In order to have better insertion and deletion guarantees,
// a linked list is more suitable, because it requires no shifting of elements
// as contiguity and random access aren't its properties.

