// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    document.getElementById("geolocation").addEventListener("click", callFunctions);
}

// onSuccess get latiude and longitude
//Display it on a map
function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    //alert(longitude);

    var latLng = new google.maps.LatLng(latitude, longitude);

     var mapOptions = {
        center:latLng, 
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };        

    var map = new google.maps.Map(document.getElementById("myMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "I am here"

    });

}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('Please turn on your location' + '\n');
}

function callFunctions(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}