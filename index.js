//https://openweathermap.org/current

const container = document.getElementById("container");
const searchCity = document.getElementById("searchCity");
const searchInput = document.getElementById("searchInput");
const currentTemp = document.getElementById("currentTemp");
const icon = document.getElementById("icon");
const iconDesc = document.getElementById("iconDesc");
const ciudad = document.getElementById("ciudad");
const min = document.getElementById("min");
const max = document.getElementById("max");
const wind = document.getElementById("wind");
const humed = document.getElementById("humed");

//const city = "buenos aires";
//mostramos data
const displayInfo = (data) => {
    currentTemp.innerHTML = data.main.temp;
    ciudad.innerHTML = data.name;
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    iconDesc.innerHTML = data.weather[0].description;
    min.innerHTML = data.main.temp_min;
    max.innerHTML = data.main.temp_max;
    wind.innerHTML = (data.wind.speed * 3.6).toFixed(1);
    humed.innerHTML = data.main.humidity;

};


//async function getCityWeather(city) 
const getCityWeather = async(city) => {
    const APIKey = "73f8685d5c9a098fcd2f2d6352fddaa2";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIKey}`;
    const response = await fetch(api);
    const data = await response.json();
    //console.log(response);
    console.log(data);
    displayInfo(data);

}

//getCityWeather(city);



//buscador de form
searchCity.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(searchCity.value);
    getCityWeather(searchInput.value);
})


window.onload = () => {
    getCityWeather("buenos aires");
};