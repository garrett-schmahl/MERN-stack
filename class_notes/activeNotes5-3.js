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

class Message{
    constructor(author, board, title, content){
        this.author=author; //  when you construct message, pass user john as first argument
        this.board=board;
        this.title=title;
        this.content=content;
        this.createdAt=new Date();
    }
}

class User{
    constructor(firstName, lastName, username){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.messages = [];
    }

    fullName(){ // <- this is the same as fullName = function(){}
        return this,firstName+" "+this.lastName;
    }

    sendMessage(board,content,title,content){
        const msg = new Message(this, title, content);
        board.messages.push(msg);
        this.messages.push(msg);
        return msg;
    }
}

class MessageBoard{
    constructor(name, topic){
        this.name=name;
        this.topic=topic;
        this.messages=[];
    }
    
}

const john =  new User("John", "M", "JohnM");
const msg = new Message(john, "Anyone need help?", "I love helping!");

const puppersBoard = new MessageBoard(
    "Puppers & Doggos",
    "Woofers but no Yappers");


john.sendMessage(
    puppersBoard,
    "Dogs nee Help Too",
    "or do they?"
)
