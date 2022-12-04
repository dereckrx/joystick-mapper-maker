const {leftStick, rightStick, triggersBumpers} = require('../controls');

// Key/Mouse input, controller input, key_mouse
const preset = {
	"name": "Factorio NEW NEW",
	"mappings": [
		...leftStick.wsad,
		...rightStick.mouse,
		...triggersBumpers.clicksAndMods,
		"left_stick_click, left_option, alt-mode",

		// Buttons
		"a, left_click",
		"b, escape, 	toggle menu",
		"x, f, 			pickup item",
		"y, e, 			open character screen",
		
		// d-pad
		"d_pad_up,    space, shoot enemy",
		"d_pad_down,  z,     drop item",
		"d_pad_left,  tab,   next weapon",
		"d_pad_left,  q,     clear cursor",
		"d_pad_right, r, 	 rotate",
		
		// start/select
		"start,  m, world map",
		"select, t, technology screen",

		// others	
		", c, 			     shoot selected",
		", mouse_wheel_up, 	 zoom in",
		", mouse_wheel_down, zoom out",
		", x, rotate active quick bar"
	]
}

module.exports = {
	preset,
}