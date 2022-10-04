
import {LinkedList} from "./LinkedList.js"

// init ll
const ll = new LinkedList(1)
ll.append(2)
ll.append(3)
ll.append(4)

// make loop
let lastNode = ll.head.next.next.next
let secondNode = ll.head.next
lastNode.next = secondNode

// Floyd’s Cycle-Finding Algorithm 
const loopBeginNode = ll.findLoopStartNode(ll.head)

console.log(ll)
console.log(
	lastNode, "now references to", secondNode
);
console.log(
	"First node of loop: ", loopBeginNode
);