"use strict";

let config = require('./config/config');

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
//     .then(() => console.log('MongoDB has started'))
//     .catch(e => console.log(e));

const options = {
    useNewUrlParser: true
};

mongoose.connect(config.uri, options)
    .then(()=>console.log('MongoDB has started'))
    .catch(e=>console.log(e));


require('./person.model');
const Person = mongoose.model('persons');

const person = new Person({
    name: 'qwerty',
    age: 25,
    isMarried: false,
    phones: [
        12345567
    ]
});



// [{name:'person1', age: 26},{name:'person2', age: 70},{name:'person3', age: 65},{name:'person4', age: 30}].forEach(p => {
//     new Person(p).save();
// });

// person.save().then(user => console.log(user)).catch(e => console.log(e));

// Person
//     .find({name:'qwerty'})
//     .then(persons=> {
//         console.log(JSON.stringify(persons, null, 2));
//         // const p = persons[0];
//
//         // Person.find({_id: p._id}).remove().then(_=>console.log('Removed!'))
//     });

