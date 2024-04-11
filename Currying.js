function f(a){

   return  function f(b){
     console.log(a,b);
    }
}

f(3)(4)


///Sum all function 1-sum(2)(6)(1)

  function sum(a){

    return function (b){

      return function(c){

        return  a + b + c

       }
     }
  }

 console.log(sum(2)(6)(1));




//question based 
// evaluate('sum')(4)(2);
// evaluate('Multiply')(5)(9);
// evaluate('divison')(6)(10);
// evaluate('subztraction')(8)(4);


function evaluate(operation){
    return function(a){

       return function(b){

        if( operation === "sum"){
         return a+b;
        }else if(operation === "multiply"){
          return a*b;
        }else if( operation === "Divison"){
          return a / b
        }else if( operation === "substraction"){
          return a - b
        }else{
          return 'invalid operate'
        }

        } 
     }
  }


console.log(evaluate('sum')(4)(2));
console.log(evaluate('multiply')(5)(9));
console.log(evaluate('Divison')(4)(2));
console.log(evaluate('substraction')(20)(10));

const eavl=evaluate('sum')
console.log(eavl(2)(3));
console.log(eavl(2)(2));
console.log(eavl(10)(5));


/*f(a)(b) implementation */
function f(a) {
  return (b) => {
      return  "Works"
  }
}
console.log(f(1)(2)) // works
console.log(f(1)); /* (b) => {return "Works" } */


function add(a){
  return function(b){
    if(b) return add(a+b) 
    return a;
  }
}
console.log(add(2)(3)(4)(5)());


