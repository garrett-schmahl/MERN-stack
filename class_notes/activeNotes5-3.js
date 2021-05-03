// const person = {
//     firstName: "Neil",
//     lastName:"M",
//     "Middle Name": "Matt",
//     age: 32,
//     0:  "Zero",
//     address:{
//         city:"Irvine",
//         state:"CA",
//         format(){
//             console.log(this.city, this.state);
//             return this.city+this.state;
//         },
//     },
// };

// let keyname =  "age"
// //use const for arrays and objects
// //use let for everything else


// console.table(person[keyname]) //need to  use bracket notation when you are using a variable as the key.
// //console.table is a thing

// console.log(person.address.format().length)
// //returns the length of the string that is city + state

// console.log(console)

class User{
    constructor(firstName, lastName, username){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
    fullName(){
        return this,firstName+" "+this.lastName;
    }
}

class Message{
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
}