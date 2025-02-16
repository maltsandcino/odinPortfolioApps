let weatherapp = document.createElement("div");
weatherapp.classList.add("weatherContainer");
let weatherTitle = document.createElement("h2");
weatherTitle.innerHTML = "Current Weather";
weatherTitle.classList.add("weatherTitle");



// Currently holding all the weather information

weatherapp.appendChild(weatherTitle)

// Constituent parts
let town_name = document.createElement("p");
let current_temp = document.createElement("p");
let text = document.createElement("p");
let last_updated = document.createElement("p");

let town_name_data = document.createElement("p");
let current_temp_data = document.createElement("p");
let text_data = document.createElement("p");
let last_updated_data = document.createElement("p");

let icon = document.createElement("img")
const x = document.createElement("div")

// Adding each part to X div
x.appendChild(town_name)
x.appendChild(town_name_data)

x.appendChild(current_temp)
x.appendChild(current_temp_data)

x.appendChild(text)
x.appendChild(text_data)

x.appendChild(last_updated)
x.appendChild(last_updated_data)

// Appending to weather panel
x.classList.add("weatherDetails");

icon.classList.add("weatherImage");
weatherapp.appendChild(icon)
weatherapp.appendChild(x)

// Searching Elements
const inbox = document.createElement('input');
inbox.classList.add("weatherInput");
inbox.type = "text";
inbox.id = "WeatherSearchBox";
const buttonforfield = document.createElement("button");

// Appending Search Elements
buttonforfield.classList.add("weatherButton");
buttonforfield.innerText = "Search For The Weather";

// Event Listener
buttonforfield.addEventListener('click', citySearch)
inbox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        citySearch();
    }})
weatherapp.appendChild(inbox)
weatherapp.appendChild(buttonforfield)



// Latitude and Longitude variables
var lat = ""
var long = ""

// Getting users location

function getLocation(){
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(fetchWeather);
}
else {
    x.innerHTML = "Not Supported"
}
}

// Function to actually fetch weather data based on current or given location

async function fetchWeather(position){
    console.log(position)
    lat = position.coords.latitude;
    long = position.coords.longitude;

    const forecast = await  fetch(`https://api.weatherapi.com/v1/current.json?key=549e0fbd3b5d4305be9180049250302&q=${lat},${long}`);
    if (!forecast.ok){
        return
    }
    const data = await forecast.json();

        displayAll(data)
}

function displayAll(data){

    town_name.innerHTML = `City:`
    town_name_data.innerHTML = `${data.location.name}, ${data.location.country}`
    current_temp.innerHTML = `Current Temperature:`
    current_temp_data.innerHTML = `${data.current.temp_c}`
    text.innerHTML = `Conditions:`
    text_data.innerHTML = `${data.current.condition.text}`
    let conditions = data.current.condition.text
    if (conditions.includes('rain')){
        weatherapp.classList.add('rainbg')
        weatherapp.classList.remove('snowbg')
    }
    else if (conditions.includes('snow')){
        weatherapp.classList.add('snowbg')
        weatherapp.classList.remove('rainbg')
    }
    else {
        weatherapp.classList = 'weatherContainer'
    }
    last_updated.innerHTML = `Local Time:`
    last_updated_data.innerHTML = `${data.location.localtime}`
    icon.src = `${data.current.condition.icon}`
    weatherapp.appendChild(x)
    if(!data.current.is_day){
        weatherapp.classList.add("weatherNight")
        inbox.classList.add("inputNight")
        buttonforfield.classList.add("buttonNight")
    }
    else{
        weatherapp.classList.remove("weatherNight")
        inbox.classList.remove("inputNight")
        buttonforfield.classList.remove("buttonNight")
    }}

async function citySearch(){

        if (document.getElementById("WeatherSearchBox").value == ""){
            return
        }
        const forecast = await  fetch(`https://api.weatherapi.com/v1/current.json?key=549e0fbd3b5d4305be9180049250302&q=${document.getElementById("WeatherSearchBox").value}`);
        if (!forecast.ok){
            alert("No location could be found matching that query.")
            document.getElementById("WeatherSearchBox").value = ""
            return
        }
        const data = await forecast.json();
        displayAll(data)
        document.getElementById("WeatherSearchBox").value = ""
    }

function initializeWeatherApp() {
    getLocation();
}



// Export the app window div and the initializer function
export { weatherapp, initializeWeatherApp }