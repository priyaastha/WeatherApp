let cityentry =document.getElementById("city");
let date =document.getElementById("date");
let temp =document.getElementById("temp");
let minmax =document.getElementById("min-max");
let weather =document.getElementById("weather");
let iconE = document.getElementById('myicon');
        
let today = new Date();

const SearchInput = document.getElementById("input-box");
const searchButton=document.getElementById("btn");
const weatherApi = {
    key: "5cd4fc3258d91fd3fbe68fd3c0299c20",
    baseUrl: "api.openweathermap.org/data/2.5/weather?"
}

searchButton.addEventListener("click", (e) => {
    console.log(SearchInput.value);
    getWeatherReport(SearchInput.value);
    SearchInput.value='';
});

const getWeatherReport=async (city)=>{
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`,{mode: 'cors'});
        const weatherData= await response.json();
        console.log(weatherData);

        cityentry.textContent = `${weatherData.name},${weatherData.sys.country}`;
        temp.innerHTML = `${Math.round(weatherData.main.temp) - 273} &deg;C`;
        minmax.innerHTML = `${Math.floor(weatherData.main.temp_min) - 273} &deg;C (min) / ${Math.ceil(weatherData.main.temp_max) - 273} &deg;C (max)`;
        weather.innerHTML = `${weatherData.weather[0].main}`;
        date.innerHTML = datefun(today);

        iconE.src = `icons/${weatherData.weather[0].icon}.png`;
        //iconElement.innerHTML = `<img src="icons/${i}.png"/>`;

        if(weather.textContent == 'Clouds'){
            document.body.style.backgroundImage = "url('images/def.jpg')";
        }
        else if(weather.textContent == 'Thunderstorm'){
            document.body.style.backgroundImage = "url('images/thunder.jpg')";
        }
        else if(weather.textContent == 'Clear'){
            document.body.style.backgroundImage = "url('images/clearr.jpg')";
        }
        else if(weather.textContent == 'Drizzle'){
            document.body.style.backgroundImage = "url('images/drizzle.jpg')";
        }
        else if(weather.textContent == 'Haze'){
            document.body.style.backgroundImage = "url('images/haze.jpg')";
        }
        else if(weather.textContent == 'Snow'){
            document.body.style.backgroundImage = "url('images/snow.jpg')";
        }
        else if(weather.textContent == 'Rain'){
            document.body.style.backgroundImage = "url('images/rain.jpg')";
        }
        else if(weather.textContent == 'Mist' || weather.textContent == 'Fog' || weather.textContent == 'Squall'){
            document.body.style.backgroundImage = "url('images/fog.jpg')";
        }
        else if(weather.textContent == 'Smoke' || weather.textContent == 'Dust' || weather.textContent == 'Sand' || weather.textContent == 'Ash'){
            document.body.style.backgroundImage = "url('images/dust.jpg')";
        }
        else if(weather.textContent == 'Tornado'){
            document.body.style.backgroundImage = "url('images/tornado.jpg')";
        }
    }
    catch(error){
        alert("Please enter a valid city name!");
    }
};

function datefun(d){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} (${days[d.getDay()]})`;
}


//AIzaSyAc22zCL0dC4E_jRuLrz7VZmVBpdPRR5SQ