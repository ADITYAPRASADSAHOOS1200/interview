// sybnchronous and asynchronous

// console.log("Start");

// console.log("Subscribe Aditya Coder");
// console.log("Finish");







console.log("start");

function importantaction(username,cb){
    setTimeout(()=>{
   cb( `subscribe to ${username}`)
    },1000)
}

const message=importantaction("Roadside Coder!",(message)=>{
    console.log(message)
})


console.log("stop");