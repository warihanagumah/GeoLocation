// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//

//declare public variables
var latitude;
var longitude;
var latLng;
var map;


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(displayMap, onError);
}

// onSuccess get latiude and longitude
//Display it on a map
function displayMap(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;


     latLng = new google.maps.LatLng(latitude, longitude);

     var mapOptions = {
        center:latLng, 
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };        

     map = new google.maps.Map(document.getElementById("myMap"), mapOptions);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('Please turn on your location' + '\n');
}

//display maker
function marker(){
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "I am here"

    });

}