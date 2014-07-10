/**
 * jQuery diapGmap JS
 *
 * to use easily "Google Map Embed"
 *
 * @category    jQuery Plugin
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 * @copyright   2014, Daiki Sato
 * @author      Daiki Sato <sato.dik@gmail.com>
 * @link        http://orememo-v2.tumblr.com
 * @version     1.0
 * @since       2014.07.10
 */


(function($, undefined) {

	$.fn.dispGmap = function(options) {

		var opts;
		var defaults = {
			targetGeocode: '',
			zoom: 18
		}

		opts = $.extend(defaults, options);

		return this.each(function() {

			var $self = $(this);
			var targetGeocode = opts.targetGeocode;
			var gMapZoom = opts.zoom;
			// var dispMap = opts.dispId;
			var dispMap = $self.attr('id');
			var targetGeocoder = new google.maps.Geocoder();

			if(!targetGeocoder || !targetGeocode) return;

			targetGeocoder.geocode(
				{ address: targetGeocode },
				function(results, status){
					var gMapLatLng, gMapOptions, gMap, gMapMarker;

					if(status != google.maps.GeocoderStatus.OK) return;

					gMapLatLng = results[0].geometry.location;

					gMapOptions = {
						zoom: gMapZoom,
						center: gMapLatLng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						mapTypeControl: false
					}
					gMap = new google.maps.Map(document.getElementById(dispMap), gMapOptions);

					gMap.getCenter(gMapLatLng);

					gMapMarker = new google.maps.Marker({
						map: gMap,
						position: gMapLatLng,
					});
				} // end of function(results, status) {}
			); // end of gMapGeocoder.deocode()
		});

	} // end of $.fn.dispGmap

})(jQuery, undefined);
