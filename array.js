const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[4])

const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

//push
num.push(10)

//Unshift
num.pop()

//shift
num.shift()


const names = ['Amal', 'Dhanbad', 'Akash', 'Akshat', 'Suhbham', 'Saikat', 'Arup']
console.log(names)

//index of method

console.log(names.indexOf('Akash', 3))

//last index of names

console.log(names.lastIndexOf('Akash'))

//concat means add of two arrays
let names1 = ['Amal', 'Dhanvan', 'Akash']
let names2 = ['Ama', 'Dhanan', 'Aash']
let names3 = names.concat(names2)
console.log(names1.concat(names2))

//slice means inbetween index arrays are print

console.log(names3.slice(3, 5))

//spread operator

let nams3 = [...names1, ...names2]

console.log(names3)

//For loop
for (let i = 0; i < names.length; i++) {
    //console.log(names[i])
}

//For of
for (let names of names) {
    //console.log(names)
}

//for each
names.forEach(function(name, index) {
    //console.log(name, index)
})

//join

let student = ['S', 'h', 'i', 'b', 'a']
student = student.join('_');

//spilt
console.log(student.split())