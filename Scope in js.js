///the scope is by default global
//name is a global scope that's why it get acces
var name = 'Arup';

function sayName() {
    //marks is a local scope tha's why it get acces
    var marks = 10;
    console.log(name);
}

sayName()
console.log(marks);


var x = 0;

//Global Scope #1
function first() {
    //Local Scope #1
    var x = 1;
    console.log(x);

    function childOfFirst() {
        var x = 2;
        console.log(x);
        //Local Scope #2
    }
    childOfFirst()
}

first()

//Global Scope
function second() {
    console.log(x);
    //Local Scope #2
}
//Global Scope
second();




//Lexical Scope

function Dada() {
    var name = 'Amlesh Kumar';
    //Likes is not accessible here
    function Papa() {
        console.log(name);
        //name is acceesible here
        //Likes is not accessible here
        function Beta() {
            //Innermost level of the sope chain
            //name is also accessible here
            var likes = 'coding';
        }
        console.log(likes);
        Beta()
    }
    Papa()
}
Dada()