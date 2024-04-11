


//map method

// const nums=[1,2,3,4]

// const multiply3=nums.map((num,i,arr)=>num*3 + i )
// console.log(multiply3);


//what is filter?

// const nums1=[2,4,5,8]

// const Filter=nums1.filter((nums)=> nums > 2)
// console.log(Filter);


const obj=[
  {
     id:1,
     brand:'samsung',
     price:10,

  },
  {
     id:2,
     brand:'samsung',
     price:10,

  },
  {
     id:3,
     brand:'samsung',
     price:10,

  },
  {
     id:4,
     brand:'samsung',
     price:10,

  },
  {
     id:4,
     brand:'samsung',
     price:10,

  }
]

const total= obj.reduce((acc,curr)=>{ return acc + curr.price },0)

console.log(total)




Array.prototype.mymap=function (cb){
    let temp=[]

    for(let i=0 ;i < this.length;i++){
       
       temp.push(cb(this[i],i,this))
    }
  return temp;
}

const nums=[1,2,3,4]

const multiply3=nums.mymap((num,i,arr)=>num*3 + i )

console.log(multiply3);



Array.prototype.myFilter=function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
       if(cb(this[i],i,this)) temp.push(this[i])
    }
return temp
}

const nums1=[2,4,5,8]

const Filter=nums1.myFilter((nums)=> nums > 2)
console.log(Filter);



Array.prototype.MyReduce=function(cb,intialValue){
    var accumulator=intialValue
    for(let i=0;i <this.length;i++){
          accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}


const total2= obj.MyReduce((acc,curr)=>{ return acc + curr.price },0)

console.log(total)



Array.prototype.myMap = function(cb) {
   let temp = [];
   for (let i = 0; i < this.length; i++) {
    
      temp.push(cb(this[i],i,this))
   }
   return temp; // This line was missing in your implementation
 };
 

let arr=[1,2,3,4,5]


console.log(arr.myMap((num) =>{
   return num*2 ;
}))


const number=[20,30,40,50]


Array.prototype.myFilter=function(cb){

   let temp=[];

   for(let i=0;i< this.length;i++){
   
      if(cb(this[i],i,this))  temp.push(this[i]) 

   }

return temp;

}


const what=[10,12,24,23]
 
console.log(what.myFilter((nums)=>nums !== 12));




Array.prototype.myreduce=function(cb,intialValue){
   let accumulator=intialValue;
   for(let i=0;i< this.length;i++){
      accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
   }
   return accumulator
}


let avar=[1,2,3,4,5]

console.log(avar.myreduce((acc,curr)=>{ return acc+ curr},0));