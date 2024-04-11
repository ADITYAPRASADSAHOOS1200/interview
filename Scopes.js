//Scopes in js

// var a=5;
// {
//     var a=6
//     console.log(a);
// }


/* {
     let a=6 
 }
 console.log(a); it is not defined*/



//variable Shadowing

/*function test(){
 
    let a='hello';                    
   
    if (true){
        let a='hii'
         console.log(a);
    }
    console.log(a);
}

test()*/

//illegal Shadowing

/*function test(){
  
    var a='hello'
    let b='hi'

  if(true){
    let a='goodbye'
    var b='bye'
    console.log(a);
    console.log(b);
  }

}
test();*/




//decalaration

/*
  var a;
  var a; var can be redeclare let or const cannot be redeclare
*/

//var declare without intialization ,let and cannot be declared with intialization

// const a    ;error:SyntaxError: Missing initializer in const declaration;


//reintialization in var you can reitialize but ,let and const , cannot be updated

/*const a=5
 a=5  TypeError: Assignment to constant variable.*/


//hoisting

/* console.log(count);
 var count=1*///undefined it is hoisted
  //console.log(count);//ReferenceError: Cannot access 'count' before initialization
  let count=1 //it is hoisted but in temporal zone
 var count2;


// function test(){
//   console.log(a);

//   var c=30;
// }//it is hoisted


// function test(){
//   console.log(a,b,c);
//   let b=20;
//   const c=10;
//   var a=10;
// }// it is hoisted but in temporal dead zone






const obj={
  boards:{
    "progress":[
      {
        id:1,
        name:'admin',
        desc:'troop',
      },
      {
        id:2,
        name:'admin',
        desc:'troop',
      },
      {
        id:3,
        name:'admin',
        desc:'troop',
      }
    ],
    "Completed":[
      {
        id:1,
        name:'admin',
        desc:'troop',
      },
      {
        id:2,
        name:'admin',
        desc:'troop',
      }
    ]
  },
  
  "Compd":[
    {
      id:1,
      name:'admin',
      desc:'troop',
    },
    {
      id:2,
      name:'admin',
      desc:'troop',
    }
  ],

  
}

// console.log(Object.keys(obj['boards']));




// for (const nums in obj) {
//     console.log(obj[nums]);
// }

Object.keys(obj['boards']).forEach( nums => console.log(nums))


console.log();