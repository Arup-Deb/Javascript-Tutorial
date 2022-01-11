///objects..
let animal = {
        name: "cow",
        legs: 4
    }
    // dot notation
console.log(animal.name);

let legsprop = "legs"
    ///Bracket Notation
console.log(animal[legsprop]);


////...........ARRAY..........////
let selectbooks = ["The rudest book ever", "think and grow rich", "finish"];

console.log(selectbooks)
console.log(selectbooks[0])
console.log(selectbooks.length)

/////Function////
function namasteworld(name, lastname) {
    console.log("Namaste " + name + " " + lastname);
}

namasteworld("Gaurav")
namasteworld("Arup", "Deb")

function addition(a, b) {
    return a / b;
}
console.log(addition(4, 7))