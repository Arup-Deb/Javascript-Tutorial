////////for loop/////

/*
for (let i = 0; i < 10; i++) {
    console.log("Namaste World")
}
*/
/*
for (let i = 5; i < 51; i = i + 5) {
    console.log(i);
}
*/

/////////while loop//////////////

/*
let n = 10;
while (n != 0) {
    console.log("Namaste World");
    n--;
}
*/

/////////do while loop///////

/*
let j = 10;
do {
    console.log("Namaste World");
    j++;
}
while (j < 10)
*/

//////////FOR...In
//Objects


let animal = {
    name: "Zebra",
    leg: 4


};
for (let key in animal) {
    console.log(key, animal[key]);
}
//console.log(animal.name);

/////////Array//////
let names = ["Rahul", "Neha", "Aman", "Rishab"];
for (let index in names) {
    console.log(index, names[index]);
}

///For.. of loop

for (let name of names) {
    console.log(name);
}