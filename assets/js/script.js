var APIkey = "9eeb3abca82b0774debe91d19685abe4";
var APIlink = "https://api.openweathermap.org/data/2.5/weather";
var city;
var state;
var country;
var zipcode;
var location = document.getElementById("location");
var tempurature = document.getElementById("temp");

function currWeather() {
    navigator.geolocation.getCurrentPosition(currPos, err);
    
    function currPos(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
       
        var url = APIkey + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&units=imperial";
        
        fetch(url) 
            .then(response => response.json())
            .then(data => {
                var temp = data.main.temp;
                tempurature.innerHTML = temp + "° F";
            })
    }

    
    function err() {
        tempurature.innerHTML = "Enter desired location to see current weather";
    }
}

