import {LinkedList} from "./LinkedList.js"

const ll = new LinkedList(1)
ll.appendNodes([2,3,4,5,6,7,8,9])

const lastElement = ll.findNthFromLast(1)
const prevLastElement = ll.findNthFromLast(2)

console.log(ll);
console.log("Last element: ", lastElement)
console.log("Prev last element: ", prevLastElement)


