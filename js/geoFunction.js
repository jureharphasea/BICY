function watchLocation(successCallback, errorCallback) {

  successCallback = successCallback || function(){};
  errorCallback = errorCallback || function(){};
  var geolocation = navigator.geolocation;

  if (geolocation) {
	try {
		function handleSuccess(position) {
			successCallback(position.coords);
		}

		geolocation.watchPosition(handleSuccess, errorCallback, {
			enableHighAccuracy: true,
			//maximumAge: 60000 // 60 sec.
      });
    } 
    catch (err) {
		errorCallback();
	}
  } 
  else { errorCallback(); }
}

function showLine(){
	$('#list').show();
	alert("Linija");
}

/*** STYLE GEO **/

function randColor(){
	return '#' + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1,6);
}

var MeIconType = L.Icon.extend({
 options: {
    iconUrl: 'images/blue_dot.jpg',
    iconSize: new L.Point(21, 23),
    iconAnchor: new L.Point(10, 10),
    popupAnchor: new L.Point(-3, -20)
 }
});

meIcon2 = new MeIconType();

var meIcon = L.Icon({
    iconUrl: 'images/blue_dot.jpg',
    iconSize: new L.Point(21, 23),
    iconAnchor: new L.Point(10, 10),
    popupAnchor: new L.Point(-3, -20)
});

var arrowIcon = L.icon({
    iconUrl: 'images/arrow.png',
    iconSize: new L.Point(18, 18),
    iconAnchor: new L.Point(9, 9)
});


var poiIcon = L.icon({
    iconSize: new L.Point(22, 22),
    iconAnchor: new L.Point(11, 11)
});


var poiIconType = L.Icon.extend({
	 options: {
	    iconSize: new L.Point(22, 22),
	    iconAnchor: new L.Point(11, 11)
	 },
	 
	 setIconImg: function (iconImg) {
	 	this.options.iconUrl=iconImg;
	 	return this;
	 }
});
var 	infoIcon = (new poiIconType()).setIconImg('images/poi/10.png');
	barIcon = (new poiIconType()).setIconImg('images/poi/21.png');
	iceIcon = (new poiIconType()).setIconImg('images/poi/25.png');
	museumIcon = (new poiIconType()).setIconImg('images/poi/31.png');
	epointIcon = (new poiIconType()).setIconImg('images/poi/44.png');
	atmIcon = (new poiIconType()).setIconImg('images/poi/48.png');
	gasIcon = (new poiIconType()).setIconImg('images/poi/53.png');
	lIcon = (new poiIconType()).setIconImg('images/end.png');
	fIcon = (new poiIconType()).setIconImg('images/start.png');
	mIcon = (new poiIconType()).setIconImg('images/mid.png');

var barva='#0000FF';
function myStyle() {
    return {
        weight: 5,
        opacity: 0.7,
        //color: randColor(),
        color: barva,
    };
}

var geojsonMarkerOptions = {
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


L.Marker.Compass = L.Marker.extend({    
	_reset: function() {
		var pos = this._map.latLngToLayerPoint(this._latlng).round();

		L.DomUtil.setPosition(this._icon, pos);
		if (this._shadow) {
	    		L.DomUtil.setPosition(this._shadow, pos);
		}

		if (this.options.iconAngle) {
		    this._icon.style.WebkitTransform = this._icon.style.WebkitTransform + ' rotate(' + this.options.iconAngle + 'deg)';
		    this._icon.style.MozTransform += ' rotate(' + this.options.iconAngle + 'deg)';
		    this._icon.style.MsTransform += 'rotate(' + this.options.iconAngle + 'deg)';
		    this._icon.style.OTransform += 'rotate(' + this.options.iconAngle + 'deg)';
		}

		this._icon.style.zIndex = pos.y;
	},

	setIconAngle: function (iconAngle) {

	    if (this._map) {
		this._removeIcon();
	    }

		this.options.iconAngle = iconAngle;
	
		if (this._map) {
			this._initIcon();
			this._reset();
		}
	}
});
/**test firefox**/	

/*	var lat=45.545; 
	var lon = 13.734;
	var latlon='['+lat + ', ' + lon +']';
	ll=new L.LatLng(lat, lon);
	
	document.getElementById('geoloc').innerHTML = 'coords: ' + latlon;
	var marker=L.marker(ll, {icon: koloIcon2}).addTo(map);
*/
