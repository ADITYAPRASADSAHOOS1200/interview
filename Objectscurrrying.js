const user={
    name:"RoadsideCoder",
    age:24,
}

console.log(user.name);
user.name='Aditya'
console.log(user);
delete user.age;

//what it will return it will return 5 beacuse delete
// function works only on Objects not in a function

const func=(function(a){
    delete a;
    return a;
})(35)

console.log(func);



/*how to access this key "Like the vedio"*/

const obj3={
    name:'aditya',
    age:24,
    "Like The vedio":true,//always be in a colon if there is a space
}

// delete obj3["Like The vedio"]//to delete

console.log(obj3["Like The vedio"],);//to acess the value




/*Dynamically key valu of the object */


const Property="firstname";
const name="Aditya Agarwal";

const user1={
  [Property]: name,
}
console.log(user1.firstname);

//Computed Properties 

for (const key in obj3) {
     
    console.log('user',obj3[key]);
}

//For of loop
const entries=Object.entries(user1) 
for(const [key,value] of entries) {
      console.log('key',key ,'value',value);
}




const key={
    a:"one",
    b:"two",
    a:"three"
}

console.log(key);

//Create a functionmultiply by 2 that multiplies all the numeric values

const variable={
    a:100,
    b:200,
    c:'Parag bhaduwa'
}

multiplyby(variable)


function multiplyby(obj){
   for (const key in obj){
    if( typeof obj[key] === 'number'){
        obj[key]*=2;
      }
   }
}

console.log(variable);

//what is the op
//In JavaScript, when you use objects as keys in another object (which acts as a dictionary),
// they are implicitly converted to strings.
const a={}
const b={key:"b"}
const c={key:"c"}

a[b]=123;
a[c]=456;// so here it will show ["object object"] it will overlap the upper value
console.log(a);
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[JSON.stringify(b)] = 200;
// a[JSON.stringify(c)] = 400;
// console.log(a);

//objects in javascript
//what is Json.stringify and Json.parse ?

const Users={
   name:"aditya",
   value:24

}

const strobj=JSON.stringify(Users)
console.log(strobj);


console.log(JSON.parse(strobj));//Convert back into object   storing it on localstorage 

//What is the output of  lydia

console.log([..."lydia"]);//it will converts Strings into an array of letter ['l','y','d','i','a']

//question-what is output

const user5={name:"aditya",age:34}
const admin={admin:true,...user5}

console.log(admin);


//output of hte object
//it will only converted the String those which are in the 
const settings={
    name:"aditya",
   level:90,
   health:281,
}

const str=JSON.stringify(settings,['level','health'])
console.log(str);



//this key inobject output

const object={
    radius:10,
    diameter(){
        return this.radius * 2;//this keyword will reference to the --object//normal function
    },
    perimeter:()=>2 * Math.PI * this.radius, // Arrow functions do not bind their own this context, instead, they inherit this from the surrounding lexical context, which in this case is likely the global object (window in a browser environment). This is causing this.radius inside the arrow function to be undefined, leading to the NaN result.
}

console.log(object.diameter());//20
console.log(object.perimeter());//Nan

//Destructuring in objects 

const User={
    name:'Aditya',
    class:'upper',
    firstClass:{
    first:'object',
     last:'object ususer',
    }

}

// const name='Roadside'

const { name:Myname,firstClass:{first,last}}=User
console.log(Myname,first,last);


//whats the output

// function fruits(fruitlist,...args,favouriteFruit){ //rest operator are only used in last parameter
//     return [...fruitlist,...args,favouriteFruit]
// }


function fruits(fruitlist,favouriteFruit,...args){ //rest operator are only used in last parameter
    return [...fruitlist,...args,favouriteFruit]
}

console.log(fruits(["banana","apple"],"pear","orange"));

//Object Referencing

let C ={greeting:'hey!'}
let D=C
C.greeting="hello"
console.log(D.greeting);

//Object whats the output

console.log({ a:1 } == { a:1 })//both of them are different object here 
console.log({ a:1 } === { a:1 })//both of them are taking different  Space in the memory and 
                                //object are only equal when they are belongs from particular area of the 





//Objects on javascript

const value={ number:10 } 

const multiplybyone=(x={...value})=>{// it will not take value its cloning the value
   console.log(x.number *= 2);
}

multiplybyone()
multiplybyone(value);
multiplybyone(value);



function ChangeAndRefrence(obj){
    obj.age=45;

    obj={
        name:'john',
        age:'20'
    }
  return obj
}



const personobj1={
    name:'alex',
    age:'30',
}

const personObj2=ChangeAndRefrence(personobj1)
console.log(personobj1);
console.log(personObj2);



// we declare a variable called members. We set the first element of that array equal to the value of the person variable. Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, you make a copy of that reference. (note that they don't have the same reference!)

// Then, we set the variable person equal to null.


let person={name :'lydia',like:'lydis'}
const members=[person];//it cannot access all values// but it cannot change the property
person.name='aditya'

console.log(members);


// We are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the members array, the first element still holds the value of the object, which gets logged.


//Shadow variable
//A shallow copy means that certain (sub-)values are still connected to the original variable.

const USER={
    name: 'Jen',
    age: 26
};

const copyOfUser =USER;
console.log(USER, 'USER'); //{ name: 'Jen', age: 26 } USER

console.log('------------After Modification-----------');
copyOfUser.age = 24;
/*
Here you would expect USER object wouldn't change, but copyOfUser 
and USER object both share same memory address
------------After Modification-----------
*/
console.log(USER, 'USER');//{ name: 'Jen', age: 24 } user 



//A deep copy means that all of the values of the new variable are copied and disconnected from the original variable








// four ways tgo clone an object
const obj = {a: 1 ,b: 2}
const objclone = Object.assign({},obj);
const objclon= JSON.parse(JSON.stringify(obj));
const objcloe = { ...obj }
console.log(objclone);
console.log(objclon);
console.log(objcloe);