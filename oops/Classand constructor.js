

// function Teacher(name,channel,like=0){
//              this.name=name;
//             this.channel=channel;   
//              this.videoLikes=like 

// }

// Teacher.prototype.intro=function(){
//     return `hey its ${this.name} !welcome ${this.channel} `
// }

// const roadSIde= new Teacher('Aditya','Coderboy')

// console.log(roadSIde.intro());

//inheritance

class Teacher {
  constructor(name, channel, like = 0) {
    this.name = name;
    this.channel = channel;  
    this.videoLikes = like;
  }

  intro() {
    return `Hey, it's ${this.name}! Welcome to ${this.channel}.`;  
  }   

  like() {
    this.videoLikes++;
    return `Like this video! Current likes: ${this.videoLikes}`;
  }
}

class YoutubeTeacher extends Teacher {
  constructor(name, channel, like, subscriber) {
    super(name, channel, like);
    this.subscriber = subscriber;
  }
  
  sub() {
    return `${this.name} has ${this.subscriber} subscribers on ${this.channel}.`;
  }
}

// const adityaCoder = new Teacher('Aditya', 'World Under Death Of Beneath');
// console.log(adityaCoder.intro());
// console.log(adityaCoder.like());

const ytTeacher = new YoutubeTeacher('Aditya', 'Coderboy', 20, 16000);
console.log(ytTeacher.intro());
console.log(ytTeacher.like());
console.log(ytTeacher.sub());




class playboy{
  constructor(name,girlfriend,job,fatigue){
      this.name=name 
      this.girlfriend=girlfriend
      this.fatigue=fatigue
      this.job=job
    }
 
    intro(){
      return `${this.name} has no ${this.girlfriend} and feel ${this.fatigue} and studying for job yet and God also 
      not give him powers or support to work rigousrly`
    }

}

class Aditya extends playboy{
      constructor(name,girlfriend,job,fatigue){
         super(name,girlfriend,job,fatigue)
      }

  static like(){
    return new Aditya("adi","sthiti","developer","fatigue")
  }
}
 
console.log(Aditya.like())


const Playboy=new playboy("adi","sthiti","developer","fatigue")

console.log(Playboy.intro());



//1.output of this
class rectangle {
  constructor(width,height){
    this.width=width
    this.height=height
  }

  area(){
    return this.width * this.height;
  }

}

const square=new rectangle(4,5)
const rect=new rectangle(6,8)

console.log(square.area())
console.log(rect.area())


//Output of this method

class calculator{

  constructor(){

     this.result=0;

  }

   add(num){
    this.result += num;
    return this;
   }
   sub(num){
     this.result -= num;
    return this;
   }
   mul(num){
     this.result *= num;
    return this;
   }
   div(num){
     if( num === 0 ){
      return `it will not able to divide`
     }else{
        this.result /= num;
     }
     return this;
   }
   
   getResult(){
    return this.result
   } 

   
}

const calc=new calculator()
const result=calc.add(10).sub(5).mul(2).div(4).getResult();
console.log(result);



class shape{
  area(){
    return 0;
  }
}

class circle extends shape{
  constructor(radius){
    super();
    this.radius=radius;
  }

  area(){
    return Math.PI * this.radius ** 2;
  }
}


class square extends shape{
  constructor(side){
    super();
    this.side=side;
  }

  area(){
    return this.side ** 2;
  }
}

const circle = new circle(5)
const square = new square(10)

console.log(circle.area())
console.log(square.area());