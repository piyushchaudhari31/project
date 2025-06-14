let hour = document.querySelector(".hour")
let minute = document.querySelector('.minute')
let sec = document.querySelector('.second')
let h2 = document.querySelector('h2')
let h1 = document.querySelector('h1')
let am = document.querySelector('.Am')
let col=0;
// let time=document.querySelector(".timi")
{

    setInterval(() => {
        let dt = new Date();
        let str = dt.getHours() % 12 + ":" + dt.getMinutes() + ":" + dt.getSeconds()

        hour.innerHTML = `${dt.getHours() % 12}`;
        sec.textContent = `${dt.getSeconds()}`
        if(sec.textContent == 1){
            sec.style.color='red';
            
        }
        else{

            sec.style.color='white'
        }
        let second=`${dt.getSeconds()}`
        
        if(second<10 ){
            sec.innerHTML=`0${second}`
        }
        
        minute.textContent = `${dt.getMinutes()}`
        let s=`${dt.getHours()}`>12 ? "PM":"AM";
        am.textContent=s;
        
        

        // let day=['Sunday','monday','Tuesday','Wednesday','Friday','Saturday']
        let day = dt.getDay() + 1;
        switch (day) {
            case 1:
                h1.textContent = 'Sunday';
                break;

            case 2:
                h1.textContent = 'Monday';
                break;

            case 3:
                h1.textContent = 'Tuesday'; break;

            case 4:
                h1.textContent = 'Wednesday'; break;

            case 5:
                h1.textContent = 'Thursday'; break;

            case 6:
                h1.textContent = 'Friday'; break;

            case 1:
                h1.textContent = 'Saturday'; break;


        }

        h2.textContent = `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}  , `

    }, 1000);


}



