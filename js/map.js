function initialize() {
  var mapCanvas = document.getElementById('map');
  var myLatLng = {
      lat: 4.6019057,
      lng: -74.0655344
  };
  var mapOptions = {
      center: new google.maps.LatLng(4.6019057, -74.0655344),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
