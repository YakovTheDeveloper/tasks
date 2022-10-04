import { LinkedList } from "./LinkedList.js"
import { hash } from "./utils/hash.js"

const hashTable = {
	496416545: "existed before",
	496416546: "existed before",
	496416547: "existed before",
}

// Separate chaining: use linked list
const separateChainingAdd = (key, value, table) => {
	if (key in table) {
		const existedValue = table[key]
		if (existedValue instanceof LinkedList) {
			existedValue.append(value)
			return
		}
		const ll = new LinkedList(existedValue)
		ll.append(value)
		table[key] = ll
		return
	}
	table[key] = value
}

// Linear probing: search next free spot (incrementing hash)
const linearProbingAdd = (key, value, table) => {
	if (key in table) {
		let newKey = key + 1
		while (newKey in table) {
			newKey = newKey + 1
		}
		table[newKey] = value
		return
	}
	table[newKey] = value
}

// 496416545 is a hash for "alreadyExistedKey"
separateChainingAdd(hash("alreadyExistedKey"), "valueTwo", hashTable)
separateChainingAdd(hash("alreadyExistedKey"), "valueThree", hashTable)
linearProbingAdd(hash("alreadyExistedKey"), "valueFoundTheFreeSpot", hashTable)
linearProbingAdd(hash("alreadyExistedKey"), "valueFoundTheFreeSpotTwo", hashTable)
linearProbingAdd(hash("alreadyExistedKey"), "valueFoundTheFreeSpotThree", hashTable)

console.log('Hash table: ', hashTable);