let searchbtn =document.querySelector(".searchbtn ")
let inputuser =document.querySelector(".InputUser")
let input =document.querySelector(".InputUser input")
let closebtn =document.querySelector(".InputUser .close")
let Nextdays =document.querySelector(".Nextdays")
input.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        closebtn.click()
    }
})
  

searchbtn.addEventListener("click",function(){
    searchbtn.style.display='none'
    inputuser.style.display='block'
    input.focus()
    Nextdays.style.display='none'
})
closebtn.addEventListener("click",function(){
    inputuser.style.display='none'
    searchbtn.style.display='block'
    Nextdays.style.display='flex'

    


    let city=input.value 
    if(city == ''){
        alert("Please Enter City ")
    }
    
    let apiKey="2bc4954d4a0d406ab84165455250907"
    let response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4`)
    .then(raw =>{
        if(!raw.ok){
            throw new Error("network not Found")
        }
        return raw.json()
    })
    .then(function(data){
        if(!data && !data.location){
            alert("Enter valid City")
        }
        console.log(data);
        
        function weatherDetail(){
            let weatherDeatilh1 =document.querySelector(".weatherDetail h1")
        let weatherDeatilh2 =document.querySelector(".weatherDetail h2")
        let weatherDeatiltemp =document.querySelector(".weatherDetail .temp")
        let con =document.querySelector(".country")
        let cityName = data.location.name 
        let stateName =data.location.region
        let text =data.current.condition.text
        let temp=Math.ceil(data.current.temp_c)
        let fern =Math.ceil(data.current.temp_f)
        let src=data.current.condition.icon
        let contryName =data.location.country

        
        weatherDeatilh1.innerHTML= `<h1>${cityName}<span class="state">(${stateName})</span></h1>`
        weatherDeatilh2.innerHTML =`<h2>${text}</h2>`
        weatherDeatiltemp.innerHTML=`<img src="${src}" alt=""><h3>${temp}°C</h3> <h6>(${fern} °F)</h6>`
        con.innerHTML=`<i class="fa-solid fa-location-dot"></i>
                    <h2>${contryName}</h2>`
        

        let timer = document.querySelector(".timer")
        let totaldays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        let totalMonth=['january','February','March','April','May','June','July','August','september','October','November','December']
        setInterval(function(){
            
            let date =new Date()
            let day = totaldays[date.getDay()]
            let hours = date.getHours()%12
            let minute = date.getMinutes()
            let second =date.getSeconds()
            let con = (hours > 0 ) ? 'PM' :'AM'
            timer.innerHTML =`<h3>${day} , ${String(hours).padStart('2','0')}:${String(minute).padStart('2','0')}:${String(second).padStart('2','0')} ${con}</h3>`

            
        },1000)

        }
        weatherDetail()

        
        let arr = data.forecast.forecastday;
        function nextinfo(){
            
        let sum=''
        arr.forEach(function(el,idx){        
            
            let date =data.forecast.forecastday[idx].date
            let text =data.forecast.forecastday[idx].day.condition.text;
            let icon =data.forecast.forecastday[idx].day.condition.icon;

            // console.log(icon);
            
            let temp= Math.ceil(data.forecast.forecastday[idx].day.maxtemp_c)
            let Totaldays = ['Sunday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday']

            let day = new Date(`${date}`)
            let nameofDay = Totaldays[day.getDay()]
            
            let num =day.getDay()
            

            sum=sum+`<div class="days">
                        <div class="infodays">
                            <div class="info">
                                <h1>${nameofDay}<span></span></h1>
                                <h2>${date}</h2>
                                <h4>${text}</h4>
                                <h6>${temp} °<span>C</span></h6>
                            </div>
                            <div class="photo">
                                <img src="${icon}">
                            </div>
                        </div>
                        

                        
                        
                    </div>`
            
        })     
        Nextdays.innerHTML=sum
         
        

        }
        nextinfo()

        
    })
    .catch(function(error){
        alert("Please Enter Valid City")
    })

    input.value =''

})
    
