var physical = { value: 13.3 }; // 13.3 inches
var dimension = { value: 'd' }; // Diagonal
var dppx = window.devicePixelRatio ||
    (window.matchMedia && window.matchMedia("(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches? 2 : 1) ||
    1;

var width = { value: screen.width * dppx };
var height = { value: screen.height * dppx };

function calcDpi(w, h, d, opt) {
	// Calculate PPI/DPI
	w > 0 || (w = 1);
	h > 0 || (h = 1);
	opt   || (opt = 'd');
	var dpi = (opt == 'd' ? Math.sqrt(w * w + h * h) : opt == 'w' ? w : h) / d;
	return dpi > 0 ? Math.round(dpi) : 0;
}

function update() {
	var w = width.value,
	    h = height.value;

	var dpi = calcDpi(w, h, physical.value, dimension.value);

	console.log('dpi', dpi);
}

update();
