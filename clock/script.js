let hour = document.querySelector(".hour")
let minute = document.querySelector('.minute')
let sec = document.querySelector('.second')
let h2 = document.querySelector('h2')
let h1 = document.querySelector('h1')
let am = document.querySelector('.Am')

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(() => {
    let dt = new Date();

    let hr = dt.getHours() % 12 || 12; 
    let min = dt.getMinutes();
    let second = dt.getSeconds();

    hour.textContent = padZero(hr);
    minute.textContent = padZero(min);
    sec.textContent = padZero(second);

    // Color change for second = 1
    if (second == 1) {
        sec.style.color = 'red';
    } else {
        sec.style.color = 'white';
    }

    let session = dt.getHours() >= 12 ? "PM" : "AM";
    am.textContent = session;

    
    let day = dt.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    h1.textContent = days[day];

    
    h2.textContent = `${padZero(dt.getDate())}/${padZero(dt.getMonth() + 1)}/${dt.getFullYear()} , `;

}, 1000);
