const preset = {
	// Wow Mapprings: 
	// * Make ctl, alt, button on main action bar so you can cycle
	// * 3 stacked actions bars: 1, 2, 3, ctls, options
	// * Alt+(shit)tab (bumper) cycle action pages
	// * ctl+(alt)+space: zoom in/out
	// * Target Self	ctl + m
	// * Target ally target: ctl+option+m
	// Target Party	F2-F5 (maybe d-pad if mouse is around)
	// middle_click, reset camera/run
	"name": "Minecraft 2019",
	"mappings": [
		// ## Trig & Bumps: Mods and targets
		// target enemy:	r-bumper (tab)
		// target prev en:	l-bumper (shift+tab)
		// target friend:	r-bumper+l-trigger (ctrl+tab)
		// target prev friend:	l-bumper+l-trigger (ctrl+shfit+tab)
		// Cycle hot-bars
		// target self: l-trigger+start (control+m) 
		"left_trigger, left_control",
		"right_trigger, left_option",
		"left_bumper, left_shift, prev target",
		"left_bumper, tab",
		"right_bumper, tab, cycle target",
		// Left stick: 3rd person move
		"left_stick_up, w",
		"left_stick_down, s",
		"left_stick_left, q, strafe left",
		"left_stick_right, e, strafe left",
		"left_stick_click, right_click",
		// Buttons: Action bar + jump
		"a, space, jump",
		"b, 3",
		"x, 1",
		"y, 2",
		// Center buttons
		"start, m, map",
		"select, escape",
		// D-pad
		...dPad.mouse,
		// Right Stick: Camera 
		"right_stick_up, right_click, pan up",
		"right_stick_up, mouse_up",
		"right_stick_down, right_click, pan down",
		"right_stick_down, mouse_down",
		"right_stick_left, a, camera look left",
		"right_stick_right, d, camera look right", 
		"right_stick_click, left_click"
	]
}

module.exports = {
	preset,
}