import {LinkedList} from './LinkedList.js'

const ll = new LinkedList(1)

ll.appendNodes([2,3,4,4,5,5,6,7,7])
console.log(ll);
console.log("Current length: ", ll.length);
ll.log()
console.log('----------------- Remove duplicates: -----------------');
ll.removeDuplicates()
console.log("Current length: ", ll.length);
ll.log()











