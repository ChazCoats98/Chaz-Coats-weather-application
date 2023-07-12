var location = document.getElementById("location");
var condition = document.getElementById("condition");
var temp = document.getElementById("temp");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("error");
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
}

function error() {
    console.log("error");
}

success();