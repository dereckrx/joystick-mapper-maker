// Mappings ------------------------------

// Nice click and shift/control combo
const triggersBumpers = {
	clicksAndMods: [
		"right_trigger, left_click", 
		"right_bumper, right_click",
		"left_trigger, left_shift",
		"left_bumper, left_control"
	]
}

const leftStick = {
	wsad: [
		"left_stick_up, w",
		"left_stick_down, s",
		"left_stick_left, a",
		"left_stick_right, d",
	]
}

const rightStick = {
	mouse: [
		"right_stick_up, mouse_up",
		"right_stick_down, mouse_down",
		"right_stick_left, mouse_left",
		"right_stick_right, mouse_right"
	]
}

const dPad = {
	hotbar: [
		"d_pad_left, 1",
		"d_pad_up, 2",
		"d_pad_right, 3",
		"d_pad_down, 4"
	],
	wsad: [
		"d_pad_up, w",
		"d_pad_down, s",
		"d_pad_left, a",
		"d_pad_right, d",
	],
	mouse: [
		"d_pad_up, mouse_up",
		"d_pad_down, mouse_down",
		"d_pad_left, mouse_left",
		"d_pad_right, mouse_right",
	]
}

module.exports = {
    triggersBumpers,
    leftStick,
    rightStick,
    dPad,
}