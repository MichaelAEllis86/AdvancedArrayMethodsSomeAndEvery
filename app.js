//1 .Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false

//want to use some for at least one true value, modulo for odd number check

function hasOddNumber(array){
	array.some(function(value){
		return val%2 !==0
	})
	return false
}


//2. hasAZero
//Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

//hasAZero(33321232131012) // true
//hasAZero(1212121) // false

//

function hasAZero(num){
	let numString=num.toString();//make to string
	const numArray= numString.split('') //make to array with num in a string
	numArray.some(function(value){
		return value==='0'

	}) 
}

//3. hasOnlyOddNumbers
//Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
//hasOnlyOddNumbers([1,3,5,7]) // true
//hasOnlyOddNumbers([1,2,3,5,7]) // false
//plan 1. use every since all values need to be odd. 2. use modulo to check for odd numbers via if they're divisible by 2

function hasOnlyOddNumbers(array){
	array.every(function(value){
		return val%2 !==0
	})
return false 
}

//4. hasNoDuplicates 
//Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

//hasNoDuplicates([1,2,3,1]) // false
//hasNoDuplicates([1,2,3]) // true

function hasNoDuplicates(array){
	array.every(function(value){
		return array.indexOf(value)===array.lastIndexOf(value)
	})
}

//5.  hasCertainKey

//Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainKey(arr,'first') // true
//   hasCertainKey(arr,'isCatOwner') // false

//plan use evert because we need every single object in the array to contain the key

function hasCertainKey(ObjArray,key) {
	ObjArray.every(function(value){
		return key in value //using the in operator here! in returns true if a property is in an object! the object in this case is our 'value' argument because. so if the key is a property in the object in the array it should work
	})

} 

//6. Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]

//   hasCertainValue(arr,'title','Instructor') // true
//   hasCertainValue(arr,'first','Elie') // false

function hasCertainValue(ObjArray,key,value){
	ObjArray.every(function(val){
		return val[key]===value //value.key is the same as val[key] which gives us the value for a given key for one object withing the objArray. this should be the same value as what's in the original function argument
	})
}