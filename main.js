const apikey = "3b51ca376b044a894f99a9538d71af48";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon = document.getElementById("icon");

const btn = document.getElementById("btn");

async function getWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    const data = await response.json();
    if(data.cod == 200){
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('wind').innerHTML = Math.round(data.wind.speed) + " Km/h";
        document.getElementById('humidity').innerHTML = data.main.humidity + "%";
        document.getElementById("details").style.display = "flex";
        document.getElementById("inputField").value = "";
    }else{
        alert("Enter city name properly!");
    }
    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        icon.src = "images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }else {
    icon.src = "images/default.webp";
    }
}

btn.addEventListener("click",()=>{
    const cityname = document.getElementById("inputField").value;
    getWeather(cityname);
})
