Template.results.onRendered(function () {
 var lat = 44.88623409320778,
 lng = -87.86480712897173,
 latlng = new google.maps.LatLng(lat, lng),
 image = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';

         //zoomControl: true,
         //zoomControlOptions: google.maps.ZoomControlStyle.LARGE,

         var mapOptions = {
             center: new google.maps.LatLng(lat, lng),
             zoom: 13,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             panControl: true,
             panControlOptions: {
                 position: google.maps.ControlPosition.TOP_RIGHT
             },
             zoomControl: true,
             zoomControlOptions: {
                 style: google.maps.ZoomControlStyle.LARGE,
                 position: google.maps.ControlPosition.TOP_left
             }
         },
         map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions),
         marker = new google.maps.Marker({
             position: latlng,
             map: map,
             icon: image
         });

         var input = document.getElementById('searchTextField');
         var autocomplete = new google.maps.places.Autocomplete(input, {
             types: ["geocode"]
         });

         autocomplete.bindTo('bounds', map);
         var infowindow = new google.maps.InfoWindow();

         google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
             infowindow.close();
             var place = autocomplete.getPlace();
             if (place.geometry.viewport) {
                 map.fitBounds(place.geometry.viewport);
             } else {
                 map.setCenter(place.geometry.location);
                 map.setZoom(17);
             }

             moveMarker(place.name, place.geometry.location);
             $('.MapLat').val(place.address_components[1].long_name);
             $('.MapLon').val(place.geometry.location.lng());
         });


         google.maps.event.addListener(map, 'click', function (event) {
             $('.MapLat').val(event.latLng.lat());
             $('.MapLon').val(event.latLng.lng());
             infowindow.close();
             var geocoder = new google.maps.Geocoder();
             geocoder.geocode({
                 "latLng":event.latLng
             }, function (results, status) {
                 console.log(results, status);
                 if (status == google.maps.GeocoderStatus.OK) {
                     console.log(results);
                     var lat = results[0].geometry.location.lat(),
                     lng = results[0].geometry.location.lng(),
                     placeName = results[0].address_components[3].long_name,
                     latlng = new google.maps.LatLng(lat, lng);

                     moveMarker(placeName, latlng);
                     $("#searchTextField").val(results[0].address_components[3].long_name);
                 }
             });
         });

         function moveMarker(placeName, latlng) {
             marker.setIcon(image);
             marker.setPosition(latlng);
             infowindow.setContent(placeName);
             //infowindow.open(map, marker);
         }


  // $(".dot").dotdotdot({
  //   /*  The text to add as ellipsis. */
  //   ellipsis  : '... ',
 
  //   /*  How to cut off the text/html: 'word'/'letter'/'children' */
  //   wrap    : 'word',
 
  //   /*  Wrap-option fallback to 'letter' for long words */
  //   fallbackToLetter: true,
 
  //   /*  jQuery-selector for the element to keep and put after the ellipsis. */
  //   after   : null,
 
  //   /*  Whether to update the ellipsis: true/'window' */
  //   watch   : false,
  
  //   /*  Optionally set a max-height, if null, the height will be measured. */
  //   height    : null,
 
  //   /*  Deviation for the height-option. */
  //   tolerance : 0,
 
  //   /*  Callback function that is fired after the ellipsis is added,
  //     receives two parameters: isTruncated(boolean), orgContent(string). */
  //   callback  : function( isTruncated, orgContent ) {},
 
  //   lastCharacter : {
 
  //     /*  Remove these characters from the end of the truncated text. */
  //     remove    : [ ' ', ',', ';', '.', '!', '?' ],
 
  //     /*  Don't add an ellipsis if this array contains 
  //       the last character of the truncated text. */
  //     noEllipsis  : []
  //   }
  // });


$(document).ready(function() {
    $(".dot").dotdotdot();
});

     });



