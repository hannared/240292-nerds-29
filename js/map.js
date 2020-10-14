function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            center: new google.maps.LatLng(59.938883, 30.323546),
            zoom: 18
        })

    var mapPin = {
        position: new google.maps.LatLng(59.938883, 30.323546),
        type: 'info'
    }

    var Icon = {
        info: 'img/map-marker1.png'
    }

    new google.maps.Marker({
        position: mapPin.position,
        icon: Icon[mapPin.type],
        map: map
    })
}