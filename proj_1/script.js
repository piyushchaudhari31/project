function openfeture(){
let allElem =document.querySelectorAll(".elem")
let fullElem=document.querySelectorAll(".fullElem")
let fullElemBackBtn=document.querySelectorAll(".back")

allElem.forEach(function(elem){
    elem.addEventListener("click",function(){
        fullElem[elem.id].style.display = 'block'        
    })
    
})

fullElemBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        fullElem[back.id].style.display='none' 
    })
    
})

}
openfeture()

function todoList(){
    
let form =document.querySelector(".addTask form")
let input =document.querySelector("#task")
let textarea =document.querySelector("textarea")
let allTask =document.querySelector(".allTask")
let check =document.querySelector("#check")

let currentTask = []

if(localStorage.getItem('currentTask')){
    currentTask =JSON.parse(localStorage.getItem('currentTask'))
}
else{
    console.log("Task is empty");  

}


function renderTask(){
localStorage.setItem("currentTask",JSON.stringify(currentTask))

let sum=''
currentTask.forEach(function(elem,id){
    sum=sum+ `<div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button class="complete" id=${id}>Marks as Completed</button>
                    </div>`
   
})
allTask.innerHTML=sum

let markComplete=document.querySelectorAll(".complete")

markComplete.forEach(function(btn){
    btn.addEventListener("click",function(){
        let index = btn.getAttribute("id");
        currentTask.splice(index,1)        
        renderTask()    
                        
    })
    
})

}
renderTask()

form.addEventListener("submit",function(el){
    el.preventDefault()  
    // console.log(input.value)
    // console.log(textarea.value)
    // console.log(check.checked);

    console.log(currentTask);
    currentTask.push(
        {
            
            task:input.value,
            details:textarea.value,
            imp:check.checked
        })
    
    renderTask()
    input=''
    textarea=''
    check.checked=false
        
})


}
todoList()

function dayPlanner(){
    
var planData = JSON.parse(localStorage.getItem('dayPlanner'))||{};
let planner =document.querySelector(".day-planner")

var hours=Array.from({length:18},function(el,i){
    return `${6+i}:00 - ${7+i}:00`
    
})


let ans = ''
hours.forEach(function(elem,idx){
    
    var saveData =planData[idx] ||''
    
    ans = ans +`<div class="planner-Time">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="..." value="${saveData}">
    
    </div>`
})
planner.innerHTML=ans
            
            
var dayPlanner=document.querySelectorAll('.day-planner input')
            
dayPlanner.forEach(function(elem){
    elem.addEventListener('input',function(){
    
        planData[elem.id] = elem.value
        

        localStorage.setItem('dayPlanner',JSON.stringify(planData))
        
        
    })
    
})


}
dayPlanner()

function joke(){
    
let joke2setup=document.querySelector('.joke-2 h1')
let joke2punch=document.querySelector('.joke-2 h2')

async function fetchJoke(){
    let response= await fetch('https://official-joke-api.appspot.com/jokes/random')
    let data = await response.json()
    joke2setup.innerHTML =data.setup
    joke2punch.innerHTML=`=>${data.punchline}`
    

    // joke2.textContent = data.setup;
}
fetchJoke()

}
joke()


function promoTimer(){
    
let timer = document.querySelector(".pomo-timer h1")
let timerStart=document.querySelector(".pomo-timer .start")
let timerPause=document.querySelector(".pomo-timer .pause")
let timerReset=document.querySelector(".pomo-timer .reset")
let session=document.querySelector(".pomodore-fullpage .session")



let Timerinterval =null
let totalSeconds = 1500
let isWorkSession =true

function updateTime(){
    
    let minuts =Math.floor(totalSeconds/60)
    let seconds =totalSeconds %60
    timer.innerHTML =`${String(minuts).padStart('2','0')}:${String(seconds).padStart('2','0')}`    
    
}


timerStart.addEventListener("click",function(){
    clearInterval(Timerinterval)
    if(isWorkSession){
        
        
        Timerinterval= setInterval(function(){
        if(totalSeconds>0){

            totalSeconds--
            updateTime()
        }else{
            
            isWorkSession=false
            clearInterval(Timerinterval)
            timer.innerHTML='05:00'
            
        session.innerHTML ='Take-Break'
        session.style.backgroundColor=' rgb(110, 150, 207)'
         totalSeconds = 5*60
            

        }
    },1000)
    }
    else{
       
        Timerinterval= setInterval(function(){
        if(totalSeconds>0){
            
            totalSeconds--
            updateTime()
        }else{
            isWorkSession=true
            clearInterval(Timerinterval)
            timer.innerHTML='25:00'
            session.innnerHTML ='work-Session'
        session.style.backgroundColor=' rgb(108, 170, 108)'
        totalSeconds=25*60
            
        }
        
    
},1000)

    }
    
     
})
timerReset.addEventListener("click",function(){
    clearInterval(Timerinterval)
    totalSeconds=25*60
    updateTime()
})

timerPause.addEventListener("click",function pauseTimer(){
    clearInterval(Timerinterval)
})
}
promoTimer()

function headerPart(){
    var data =null
async function weatherApi(){
    let apikey="2bc4954d4a0d406ab84165455250907"
    let city = 'surat'
    

    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
    let data =await response.json()
    let temp = Math.floor(data.current.temp_c)
    
    console.log(data);
    
    
    
    let  headerTemp=document.querySelector('.header2 h2')
    let  headerother=document.querySelector('.header2 h4')
    let  headercondi=document.querySelector('.header2 h3')
    let  headercity=document.querySelector('.header1 h4')

    let wind = data.current.wind_kph
    let humidity = data.current.humidity
    let hitindex = data.current.heatindex_f

    
    
    

    
    headercondi.innerHTML =`${data.current.condition.text}`
    headerTemp.innerHTML = `${temp}°C`
    headerother.innerHTML= `Precipitation  : ${hitindex}% Humidity : ${humidity}%
    Wind : ${wind}Km/h`;
    headercity.innerHTML = `${data.location.name}` 
    
    

    
}
weatherApi()
 
var date=null
function timeDate(){
    const TotaldayOfWeek =['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturrday']
    const MonthOfYear =['Janauary','February','March','April','May','June','July','August','September','October','Novermber','December']
    date =new Date()
    let dayOfWeek=TotaldayOfWeek[date.getDay()];
    let Hours = date.getHours()
    
    let minuts = date.getMinutes()
    let ans= (Hours > 12) ? 'pm' : 'am';
    let day= date.getDate()
    let month =MonthOfYear[date.getMonth()];
    let year=date.getFullYear()
    

    
    
    let header1 =document.querySelector('.header1 h1')
    let  headerdate=document.querySelector('.header1 h2')

    
    
    header1.innerHTML= `${dayOfWeek} , ${String(Hours%12).padStart('2','0')}:${String(minuts).padStart('2','0')} ${ans} `
    headerdate.innerHTML =`${day}, ${month} ${year}`
}
setInterval(function(){timeDate()},1000)

}
headerPart()