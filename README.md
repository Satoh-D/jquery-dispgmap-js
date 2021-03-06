jquery-dispmap-js
===============================

__"jquery-dispgmap.js" is a jQuery Plugin to use easily Embeding Google Map__

## Demo

- [Demo Page](https://dl.dropboxusercontent.com/u/21601359/140710_dispgmapjs/index.html)

## Usage

```html
<head>
<script src="//maps.google.com/maps/api/js?v=3&sensor=false"></script>
<script src="jquery.js"></script>
<script src="jquery.dispgmap.js"></script>
<script>
$(function() {
	$('#map_id').dispGmap({
		targetGeocode: 'location name',  //address or latitude/longitude
		zoom: 18  // zoom Level (Default: 18)
	});
})
</script>
</head>
<body>
<div id="map_id"></div>
</body>
```

## Options

- `targetGeocode`[string]: address or location name or latitude/longitude
- `zoom`[integer]: zoom level

## Depends

- Google Maps API JavaScript
- jQuery.js

## Browser Support

- IE8+
- Google Chrome(win/mac)
- Firefox(win/mac)
- Safari(win)

## License

MIT License.

## Copyright

©Sato Daiki. ([@Satoh_D](https://twitter.com/Satoh_D))
