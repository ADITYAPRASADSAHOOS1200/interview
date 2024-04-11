//Function declaration
//what is function declaration?
//q1 function declaration


function Aditya(name){ //when we deaclare like this is known as function declartion 
    return name;
}

console.log(Aditya('payal'));



//q2function expresssion //when we declare a function into an variable is known as function expression


const Name=function(num){
    return  num*num;
}

console.log(Name(10));

//q3 First class function 
//  the function which are treated like variables.
// In this function you can pass it to another function,manipulated,used ,return from another function

function Square(num){
    return num * num
}

function  displaySquare(fn){
    return fn(5)
}


console.log(
    displaySquare(Square));


//q4.IIFE Immmediately invoked function 

/*(function aditya(num){
    console.log(num+num); 
})(5)*/


//q5 Function Scopes

/*(function (x) {
     return (function (y) {
           console.log(x);

       })(4)

   })(1)*/


  //function scopes  // first it will check the local variable whether it is defined or not


 /* var num1=20;
  var num=3;
  var name="aditya"

  function multiply(){
     return num1*num;
  }

  console.log(multiply());

  function getScore(){
    var num1=30;
     num=6;
    function add(){
        return name +"scored" + (num1 + num);
    }
   return add()
  }
console.log(getScore());*/



//q7.function hoisting // In function the complete function is copied to the function scope

 john()
 console.log(x);

 function john(){
 console.log('adi');
 }
 


//q8.function hoisting  // In 

/* Aerobase();

 function Aerobase(){
    console.log(x)
    var x=5
    console.log('aditya');
 }*/


//q9.function hoisting

var x=21
function express(){
    console.log(x);
    var x=20
}
express()



//spread or rest

// function value(num1,num2,num3){
// console.log(num1*num2+num3,"spread");

// }

let arr=[5,6,9]
// value(...arr);// we can pass it like this//spread  operator 

//function 

// function value2(...nums){//when it is use in params it is rest operator
// //   console.log(nums);
// //    console.log(nums[0] *nums[1]+nums[2],"Rest");
// // }
// value2(...arr)

//function

// function value3(num1,num2,num3,...numbers){//rest operator always be at last
//     console.log(num1,num2,num3,numbers);
// }

// let arr4=[5,6,7,8,9,10]
// console.log(value3(...arr4));

