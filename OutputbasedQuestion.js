console.log('hello');

let students=[
{name:"piyush", rollNumber:31 , marks: 80},
{name:"Aditya", rollNumber:34 , marks: 69},
{name:"Kaushal", rollNumber:45 , marks: 35},
{name:"Dilpreet", rollNumber:50 , marks: 55},

]

//easily with map

// const nme=students.map((value)=>value)
// console.log(nme);

//op-2
//serious case with for loop
// let names=[]

// for(let i=0;i<students.length;i++){
   
//    names.push(students[i].name.toUpperCase())
// }
// console.log(names);


// o/p-3

//filter

//returns the student who scored more than sixty marks and roll number has greater than 15


const filter=students.filter((nums)=>nums.marks > 60 && nums.rollNumber >15)

console.log(filter);





//op-4
//reduce

const reduce=students.reduce((marks,currmarks)=>{return marks + currmarks.marks},0)
console.log(reduce);


//returns only the names who has greater than 60

 const Filter=students.filter((nums)=>nums.marks > 60).map((students)=>students.name)
 console.log(Filter);


//returns the student marks greater than 60
//and after 20 marks have been added  to those who scored less than 60

const marks=students.map((stu)=>{
  
if(stu.marks <60){
    stu.marks+=20;
}
 return stu
}).filter(stu=>stu.marks)

console.log(marks);





/// first class function in javscript
function square(nums){
    return nums*nums
}

function diSplaySquare(fn){
    console.log(fn(5));
}

diSplaySquare(square)

