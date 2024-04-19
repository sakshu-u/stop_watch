var hrs = "00" 
var min = "00" 
var sec = "00" 
var time;
const ourMain = document.querySelector("#child")
document.getElementById("start").addEventListener("click",()=>{
   time =  forStart()
   document.querySelector("#start").style.display = "none"
   document.querySelector("#fakestart").style.display = "block"
})
document.getElementById("reset").addEventListener("click", ()=>{
    forreset(time)
    document.querySelector("#start").style.display = "block"
    document.querySelector("#fakestart").style.display = "none"
})
document.getElementById("stop").addEventListener("click", ()=>{
    forstop(time)
    document.querySelector("#start").style.display = "block"
    document.querySelector("#fakestart").style.display = "none"
})

// var time;
// ourStart.addEventListener("click",forStart)


function forStart(){

    for(i = 0 ; i<1;i++){

            // if (hrs == 24){
            //     hrs = "00"
            //     min = "00"
            //     sec = "00"
            if(min == 59 && sec == 59){
                hrs++
                min = "00"
                sec = "00"
            }else if (sec == 59){
                min++
                sec = "00"
            }else {
                sec++
            }
            
            
            var sec2 = sec.toString()
            var hrs2 = hrs.toString()
            var min2 = min.toString()
            if (sec<10 && sec2.startsWith("0") == false){
                // console.log(sec2.slice(0,1))
                sec = "0"+sec
            }else{}
            
            if(min<10 && min2.startsWith("0") == false){
                // console.log(min2.slice(0,1) != 0)
                min = "0"+min
            }else{}
            
            if(hrs<10 && hrs2.startsWith("0") == false){
                // console.log(hrs2.slice(0,1) != 0)
                hrs = "0"+hrs
            }else{}
            
            
             ourMain.textContent = hrs+":"+min+":"+sec
            
    }

var yimmer = setInterval(() => {
// if (hrs == 24){
//     hrs = "00"
//     min = "00"
//     sec = "00"
if(min == 59 && sec == 59){
    hrs++
    min = "00"
    sec = "00"
}else if (sec == 59){
    min++
    sec = "00"
}else {
    sec++
}


var sec2 = sec.toString()
var hrs2 = hrs.toString()
var min2 = min.toString()
if (sec<10 && sec2.startsWith("0") == false){
    // console.log(sec2.slice(0,1))
    sec = "0"+sec
}else{}

if(min<10 && min2.startsWith("0") == false){
    // console.log(min2.slice(0,1) != 0)
    min = "0"+min
}else{}

if(hrs<10 && hrs2.startsWith("0") == false){
    // console.log(hrs2.slice(0,1) != 0)
    hrs = "0"+hrs
}else{}


 ourMain.textContent = hrs+":"+min+":"+sec
    }, 1000);

return yimmer
}

function forstop(time){

    clearInterval(time)

}

// setTimeout(() => {
//     forreset(time)
// }, 3000);

function forreset(time){
    hrs = "00" 
    min = "00" 
    sec = "00" 
    forstop(time)
    ourMain.textContent = "00"+":"+"00"+":"+"00"
}

