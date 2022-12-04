const {leftStick} = require('../controls');


const preset = {
	"name": "Web_Liero",
	"mappings": [
		...leftStick.wsad,

		"right_trigger, f, fire",
		"left_trigger, left_shift, ninja rope",
		
		"left_bumper, comma, prev weapon",
		"right_bumper, period, next weapon",

		// Buttons
		"a, s,	jump",
		"b, escape",
		"y, c, 	dig",
		"x, r, reload",

		// d-pad
		"d_pad_up, up_arrow, shorten rope",
		"d_pad_down, down_arrow, lengthen rope",
	]
}

module.exports = {
	preset,
}