const characters = [{
        name: 'Tarak meheta',
        height: '123',
        mass: '66',
        eye_color: '44',
        gender: 'female',
    },
    {
        name: 'Tarak meta',
        height: '23',
        mass: '66',
        eye_color: '4',
        gender: 'femle',
    },
    {
        name: 'Tak meheta',
        height: '13',
        mass: '66',
        eye_color: '44',
        gender: 'male',
    },
    {
        name: 'Tk meheta',
        height: '123',
        mass: '66',
        eye_color: '44',
        gender: 'fale',
    },
];

//get an array of all names

const names = characters.map(ch => ch.name)
console.log(names);

//get an array of objects with just name and height properties
const propertiesOfCh = characters.map(ch => {
    return {
        name: ch.name,
        height: ch.height
    }
})
console.log(propertiesOfCh);

//get the total height of the all characters

const totalHeight = characters.reduce((prevHeight, character) => {
    return prevHeight + Number(character.height);
}, 0);
console.log(totalHeight);

///get characters with mass greater than 100
const greaterThanMass = characters.filter((character) => {
    return character.mass > 100
})
console.log(greaterThanMass);

//get all male characters
const maleCh = characters.filter((character) => {
    return character.gender == 'male'
})
console.log(maleCh);