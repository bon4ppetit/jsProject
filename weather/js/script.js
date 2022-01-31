let RequestForWeb = 'http://api.openweathermap.org/data/2.5/weather?id=1496153&appid=9d4697e3bca184c485b542dc92f93275'

let WeatherImg = document.querySelector('.weather-img'),
    WeatherTemp = document.querySelector('.temp'),
    WeatherDate = document.querySelector('.date__wrapper'),
    WeatherHumidity = document.querySelector('.rain')


fetch(RequestForWeb)
    .then(res => res.json())
    .then(data => {
        WeatherTemp.innerHTML = `${Math.round(data.main.temp - 273)}&deg;`
        WeatherDate.innerHTML = getDateAndTime()
        WeatherHumidity.innerHTML = `Влажность ${data.main.humidity}`
        if(data.main.humidity > 65) {
            WeatherImg.src = "img/cloudy.png"
        }
        else {
            WeatherImg.src = "img/sun.png"
        }
    })

function getDateAndTime() {
    let D = new Date(),
        month = D.getMonth(),
        day = D.getDay(),
        year = D.getFullYear()
    
    let hours = D.getHours(),
        minutes = D.getMinutes(),
        seconds = D.getSeconds()
    
    return `${day}.${month}.${year} ${hours}.${minutes}.${seconds}`
}
