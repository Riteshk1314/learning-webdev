// // //functions
// // //functions
// // function add(a,b){
// //   console.log(a+b);
// //   return a+b
// // }
// // const sum = add(2,3);
// // console.log(sum);

// // function calculateCartPrice(val1, val2,...num1 )//... is a rest operator 
// // {
// //   return num1
// // }
// // console.log(calculateCartPrice(3444, 2221, 200,500,100));
// // const user = {
// //   username: "ritesh ",
// //   price:999
// // }
// // function handleobbject(anyobject){
// //   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// // }

// // handleobbject(user);
// // const newarray=[200,499,599]
// // function handlearray(anyarray){
// //   return anyarray[2]
// // }
// // console.log(handlearray(newarray));

// // //scope
// // var c= 3000
// // let a = 33333
// // if(true){

// //   let a = 10 
// //   const b=30
// //   var c = 60 //or c=60 only 
// // console.log("inner", a)
  
// // }
// // //console.log(a) //give error bcz of not in scope 
// // //console.log(b)//same error
// // //console.log(c)

// function one(){
//   const username = "ritesh"
  
//   function two(){
    
//     const website = "youtube"
//     console.log(username)
//  }
//   // console.log(website)//scope problem
//   two()
// }
// one()

// if(true){
//   const username= "ritesh"
//   if(username=="ritesh"){
//     const website = "youtube"
//     console.log(username+website)
//   }
    
//   // console.log(website)//scope problem
// }
// // console.log(username)//scope problem

// console.log(add1(5))//here no error
// function add1(num){
//   return num+1
// }

// //addtwo(5)//gives error
// const addtwo= function(num){
//   return num+2
// }
// addtwo(5)


//******arror functions******

//  const user = {
//    username: "hitesh ",
//    price:999,
//    welcomeMessage: function(){
//    console.log(`${this.username},welcome to website`)
//    }
   
//  }
// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()





// function chai(){
//   let username="ritesh"
//   console.log(this.username) //doesnt work in functions only in objects
  
// }
// chai()

// console.log(this)





// const chai = function(){
//   let username="hitesh"
//   // console.log(this.username) gives error
//   //console.log(this) gives {}
// }
// chai()




// const chai = () =>{
//   let username="hitesh"
//   // console.log(this.username) gives error
//   //console.log(this) gives {}

// }
// chai()

// const addtwo = (num1,num2) =>{
//   return num1 +num2
// }
// console.log(addtwo(5,6))

// //2nd way //implicit return 
// const addtwo1 = (num1,num2) => (num1 +num2)//({username:"hitesh"})




//*****IIFE********
(function chai(){
  console.log(`db connected`)
})(); // ; necessary 

((name)=>{
  console.log(`${name} connected`)})('ritesh');
 
