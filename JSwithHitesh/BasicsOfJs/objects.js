//********objext*********

// //singleton ( when made with with constructor )
// // object.create(objext)
// const mySym = Symbol("key 1")
// const Jsuser= {name:"Ritesh",
//               age:18,
//               [mySym]:Symbol("mySym"),
//               location:"Jaipur",
//               email:"riteshapoor1314@gmail.com",
//               "game":"valo",
//                greeting2: function(){
//               console.log(`hello js iser, ${this.name}`)//keys like for eg name are processed as "name"
//                }}

// //accesing the object
// console.log(Jsuser.name)//not the  only way
// console.log(Jsuser["name"])//2nd way
// console.log(Jsuser["game"])//3rd way(here key was also in string )
// console.log(typeof Jsuser.mySym)//gives string if this was in obj-->> mySym:Symbol("mySym"),
// console.log(typeof Jsuser[mySym])//gives symbol when [] used

// //object.freez(Jsuser)//to freeze the object
// //function are treated as variable
// Jsuser.greeting=function(){
//   console.log("hello")
// }
// console.log(Jsuser.greeting())

// console.log(Jsuser.greeting())
// console.log(Jsuser.greeting2())\

// singleton//const tinderuse = new Object()
// console.log(tinderuser)

const tinderuser = {}; //this is not a singleton object
tinderuser.id = "123";
tinderuser.name = "ritesh";
tinderuser.isloggedin = false;

const reguser = {
  email: "rishi@gmail",
  fullname: {
    userfullname: {
      firstname: "krishi",
      lastname: "sharma",
    },
  },
};
consoloe.log(reguser.fullname.userfullname.firstname);

const obj = { 1: "one", 2: "two" };
const obj2= { 3: "three", 4: "four" };
// const obj3= {obj, obj2};
// console.log(obj3);
const obj3 = Object.assign({},obj,obj2)//all the obj from 2nd posn go into 1 so we could have avoided {}
const obj4= {...obj, ...obj2}//same as above
console.log(Object.keys(tinderuser))//returns array of keys 
console.log(Object.values(tinderuser))//retrurn array of values
console.log(Object.enteries(tinderuser))//returns array of [key,value] pairs
console.log(tinderuser.hasOwnProperty('isloggedin'))//returns true if key is present in obj

console.log(tinderuser.hasOwnProperty('email'))//returns false if key is not present in obj


//*********destructuring**********
console.log("*********destructuring**********")
const course ={
  coursename: "js ",
  price:"999",
  courseInstructor:"hitesh"
}
//course.courseInstructor
const{courseInstructor:instructor}=course
// console.log(courseInstructor)//just syntactical sugar
console.log(instructor)


