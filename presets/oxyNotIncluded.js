const {leftStick, rightStick} = require('../controls');

const preset = {
	"name": "Oxygen Not Included 2021",
	"mappings": [
		...leftStick.wsad,
		"left_stick_click, right_click",
    ...rightStick.mouse,
		"right_stick_click, left_click",

  	// Buttons
		"a, left_click,   select",
		"b, escape, 	    esc menu",
		"x, right_click,  menu",
		"y, e, 			      inventory",

    // D Pad
    "d_pad_left, k, clear",
		"d_pad_up, g, dig",
		"d_pad_right, c, cancel",
		"d_pad_down, m, mop"

    "o, rotate building",

    "mouse scroll up, Zoom in",
    "mouse scroll down, Zoom out",

		// Trigggers & Bumpers
		"right_trigger, left_click, 		 attack/destroy",
		"right_bumper,  right_click, 		 use/place block",
		"left_trigger,  left_shift, 		 sneak",
		"left_bumper,   mouse_wheel_step_up, cycle item",

		// Other
		"start,  space,  pause",
		"select, tab, cycle speed"
	]
}

module.exports = {
	preset,
}