const {leftStick, rightStick} = require('../controls');

// http://minecraft.gamepedia.com/Controls
const preset = {
	"name": "Minecraft 2019",
	"mappings": [
		...leftStick.wsad,
		"left_stick_click, left_control, Sprint",

		...rightStick.mouse,
		"right_stick_click, left_click",

		// Trigggers & Bumpers
		"right_trigger, left_click, 		 attack/destroy",
		"right_bumper,  right_click, 		 use/place block",
		"left_trigger,  left_shift, 		 sneak",
		"left_bumper,   mouse_wheel_step_up, cycle item",

		// D-Pad
		...dPad.hotbar,
		// Buttons
		"a, space, 		 jump",
		"b, escape, 	 esc menu",
		"x, right_click, use/craft",
		"y, e, 			 inventory",
		// Other
		"start,  middle_click,  pick block",
		"select, q, 			drop item"
	]
}

module.exports = {
	preset,
}