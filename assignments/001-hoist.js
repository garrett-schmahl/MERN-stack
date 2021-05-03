//1

console.log(hello);                                   
var hello = 'world';                                 
//prediction, this will return undefined


//rewrite
var hello 
console.log(hello)
hello = 'world'


//2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//prediction, this will return magnet

//rewrite

var needle = 'haystack';
function test(){
        var needle = 'magnet';
        console.log(needle);
    }
test();
//variable call is hoisted to the top
//function is hoisted to the top
//call runs where it is


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//prediction will print super cool as print is never called

//rewrite
var brendan
brendan = 'super cool';
console.log(brendan);


//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//prediction will hoist the function to under food.
//gone and then chicken

//oh, eat call and console.log stay in order ><

var food = 'chicken';
function eat(){ //function define hoists
    var food = 'gone'; //declaration hoists within the function
    food = 'half-chicken';
    console.log(food);
    }
console.log(food);
eat();


//5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//prediction chicken chicken chicken chicken
//this just runtime errors ><

var food = "fish";
var mean = function() {
    food = "chicken";
    console.log(food);
    console.log(food);
    }
mean();
console.log(food);
console.log(food);

//only way this works, but technically not the way the interpreter sees it.

//6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//rewrite
var genre
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
    }
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

//7

dojo = "san jose"; //because this is called untyped, it is technically global.
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//rewrite

dojo = "san jose";
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
    }
console.log(dojo);
learn();
console.log(dojo);

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


//rewrite
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));