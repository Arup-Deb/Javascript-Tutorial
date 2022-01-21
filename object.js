/*
let lecture = 10;
let section = 3;
let titles = 'javascript';

const course = {
    lecture: 10,
    section: 3,
    titles: 'javascript',
    notes: {
        introduction: "Welcome to JS Course"
    },
    enroll() {
        console.log('you are succesfully enrolled');
    }
}
*/
/*
function createcourse() {
    return {

        lecture: 10,
        section: 3,
        titles: 'javascript',
        notes: {
            introduction: "Welcome to JS Course"
        },
        enroll() {
            console.log('you are succesfully enrolled');
        }
    }


}

const course = createcourse();

course.enroll()
*/

/*
//factory function

function createcourse(title) {
    return {
        title: title,
        enroll() {
            console.log('you are successfully enrolled');
        }
    }
}
/*
const course = createcourse('javascript');
course.enroll()
console.log(course)


//constructor Function

function Course(title) {
    this.title = title,
        this.enroll = function() {
            console.log('you are successfully enrolled');
        }
}

const course = new Course('javascript');

course.enroll()

//primitive datatype
let number = 10;
//pass by value
let number_2 = number
number = 15;

console.log(number);
console.log(number_2);

//reference Datatype
let obj = { number: 10 };
//pass by Reference
let obj2 = obj;

//console.log(obj)
//console.log(obj2)
*/
/*
const course = {
        title: 'javascript',
        enroll() {
            console.log('you are successfully enrolled');
        }
    }
    const course_1 = {...course }
    course_1.title = "C++"
    */
const course = {
        title: 'javascript',
        enroll() {
            console.log('you are successfully enrolled');
        }
    }
    //const course_1 = Object.assign({}, course)
    //course_1.title = 'c++'
    //for in loop
    /*
    for (let key in course) {
        console.log(key, course[key]);
    }
    */
    //for of loop
for (let key of Object.keys(course)) {
    console.log(key, course[key]);
}