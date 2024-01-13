
//js is dynamically typed language

//primitive 
//7 types of primitive datatypes: string,number,bool,null,underfined,symbol,bigint
const score =100
const scorevalue= 100.3
const isloggedin= false
const outsidetemp= null //it is an object
let useremail;
const id = Symbol('123')
const anotherId= Symbol('123')
const bigNumber= 4285858032758032757932479234732n
console.log(typeof bigNumber)


//refernce (non primitive)
//array,object,function

const heros = ['spiderman','superman']
let myObj={
  name: "ritesh",
    age: 19,

}
const myfunction= function(){
  console.lof("yello")
}

// underfine= undefined 
//null = object
//boolean= boolean
//number= number
//string= string
//object(native and does not imbplement ) = object
//object(native or host and does not imbplement ) = function
//object(host and does not implenmetn ) = implenetation defined escept may not be undefined boolean number or string


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//stack( primitive)(a copy is passed).......heap(non primitive)(pass by reference)
let myyt = "rieshkapoor1314@gmail.com"//https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10
let userOne = {name:rtiesh,email:"riteshk1314@gmail.com",upi:"user@ybl"}
let userTwo = userOne
userTwo.email= "hello@google.com"
console.log(userOne.email)
console.log(userTwo.email)//both will give same output
