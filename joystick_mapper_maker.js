const fs = require('fs');

const xbox360Mappings = {
	"left_trigger": "axi 2 +", 
	"left_bumper": "btn 4",
	"right_trigger": "axi 5 +",
	"right_bumper": "btn 5",

	"left_stick_up": "axi 1 -",
	"left_stick_down": "axi 1 +",
	"left_stick_left": "axi 0 -",
	"left_stick_right": "axi 0 +",
	"left_stick_click": "btn 6",
	
	"select": "btn 9",
	"xbox_button": "btn 10",
	"start": "btn 8",
	
	"a": "btn 0",
	"b": "btn 1",
	"x": "btn 2",
	"y": "btn 3",
	
	"d_pad_up": "btn 10",
	"d_pad_down": "btn 12",
	"d_pad_left": "btn 13",
	"d_pad_right": "btn 14",
	
	"right_stick_up": "axi 4 -",
	"right_stick_down": "axi 4 +",
	"right_stick_left": "axi 3 -",
	"right_stick_right": "axi 3 +",
	"right_stick_click": "btn 7"
}

const mouseKeyboardMappings = {
"a": "key 4",
"b": "key 5",
"c": "key 6",
"d": "key 7",
"e": "key 8",
"f": "key 9",
"g": "key 10",
"h": "key 11",
"i": "key 12",
"j": "key 13",
"k": "key 14",
"l": "key 15",
"m": "key 16",
"n": "key 17",
"o": "key 18",
"p": "key 19",
"q": "key 20",
"r": "key 21",
"s": "key 22",
"t": "key 23",
"u": "key 24",
"v": "key 25",
"w": "key 26",
"x": "key 27",
"y": "key 28",
"z": "key 29",
// ---
"1": "key 30",
"2": "key 31",
"3": "key 32",
"4": "key 33",
"5": "key 34",
"6": "key 35",
"7": "key 36",
"8": "key 37",
"9": "key 38",
"0": "key 39",
// ---
"-": "key 45",
"=": "key 46",
"[": "key 47",
"]": "key 48",
"\\": "key 49",
"#": "key 50",
";": "key 51",
":": "key 52",
"`": "key 53",
",": "key 54",
".": "key 55",
"/": "key 56",
// ---
"right_arrow": "key 79",
"left_arrow": "key 80",
"down_arrow": "key 81",
"up_arrow": "key 82",
// ---
"left_command": "key 227",
"right_command": "key 231",
"left_shift": "key 225",
"right_shift": "key 229",
"left_option": "key 226",
"right_option": "key 230",
"left_control": "key 224",
"right_control": "key 228",
// --- 
"space": "key 44",
"return": "key 40",
"escape": "key 41",
"backspace": "key 42",
"tab": "key 43",
"caps_lock": "key 57",
// -- 
"insert": null,
"home": null,
"page_up": null,
"delete": null,
"end": null,
"page_down": null,
"print_screen": null,
"application": null,
"f1": null,
"f2": null,
"f3": null,
"f4": null,
"f5": null,
"f6": null,
"f7": null,
"f8": null,
"f9": null,
"f10": null,
"f11": null,
"f12": null,
"f13": null,
"f14": null,
"f15": null,
"f17": null,
"f18": null,
"f19": null,
"f20": null,
"f21": null,
"f22": null,
"f23": null,
"f24": null,
"numlock": null,
"keypad_/": null,
"keypad_*": null,
"keypad_-": null,
"keypad_+": null,
"keypad_enter": null,
"keypad_1": null,
"keypad_2": null,
"keypad_3": null,
"keypad_4": null,
"keypad_5": null,
"keypad_6": null,
"keypad_7": null,
"keypad_8": null,
"keypad_9": null,
"keypad_0": null,
"keypad_.": null,
"keypad_=": null,
"keypad_,": null,
"brightness_down": null,
"brightness_up": null,
"dashboard": null,
"mission_control": null,
"keyboard_light_down": null,
"keyboard_right_up": null,
"rewind_track": null,
"play_audio_track": null,
"fast_forward_track": null,
"mute_sound": null,
"volume_up": null,
"volume_down": null,
"eject": null,
// Mouse buttons
"left_click": "mbt 0",
"right_click": "mbt 1",
"middle_click": "mbt 2",
// Mouse motion: mouse axis, direction, sensitivity (1x-50x, default 6x)
"mouse_up": "mou 1 - 6",
"mouse_down": "mou 1 + 6",
"mouse_left": "mou 0 - 6",
"mouse_right": "mou 0 + 6",			
// Mouse wheel steps
"mouse_wheel_up": "whe 1 - 6",
"mouse_wheel_down": "whe 1 + 6",
"mouse_wheel_step_down": "whs 1 +",
"mouse_wheel_step_up": "whs 1 -" 
}

function inputToId(key) {
	return mouseKeyboardMappings[key];
}

function cInputToId(key) {
	return xbox360Mappings[key];
}

// TEST ---------------------------------------
function is(actual, expected) {
	return actual === expected ? "PASS" : `FAIL: expected '${actual}' to equal '${expected}'`;
}

const testCases = {
	"a": "key 4",
	"z": "key 29",
	"1": "key 30",
	"0": "key 39",
	"-": "key 45",
	"/": "key 56",
	"right_arrow": "key 79",
	"up_arrow": "key 82",
	"left_command": "key 227",
	"right_control": "key 228",
	"space": "key 44",
	"tab": "key 43",
	"caps_lock": "key 57",
}
				
Object.entries(testCases).map(([key, expected]) => {
	console.log(`${is(inputToId(key), expected)} ${key}`);
});

// Mappings ------------------------------

// Nice click and shift/control combo
const tiggersBumpers = {
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
		"d_pad_down, s"
		"d_pad_left, a",
		"d_pad_right, d",
	],
	mouse: [
		"d_pad_up, mouse_up",
		"d_pad_down, mouse_down"
		"d_pad_left, mouse_left",
		"d_pad_right, mouse_right",
	]
}

// Key/Mouse input, controller input, key_mouse
const factorio = {
	"name": "Factorio NEW NEW",
	"mappings": [
		...leftStick.wsad,
		...rightStick.mouse,
		...tiggersBumpers.clicksAndMods,
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

// http://minecraft.gamepedia.com/Controls
const minecraft = {
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

const wow = {
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

const template = {
	"name": "New Preset",
	"tag": "No tag",
	"joysticks": [
		{
			"tag": "<write comments here>",
			"binds": {}
		}
	]
}

function save(path, data) {
  try {
  	console.log(data);
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

function generate(data) {
	const preset = {...template};
	preset.name = data.name;
	preset.tag = "new tag";
	const binds = {};
	data.mappings.forEach((mapping) => {
		const results = mapping.split(",").map((str) => str.trim());
		const [cInput, kInput, desc] = results;
		if(cInput != null && cInput !== "") {
			console.log(`${cInput} ${cInputToId(cInput)} => [${kInput} ${inputToId(kInput)}]`);
			binds[cInputToId(cInput)] = [inputToId(kInput)];
		}
	});
	preset.joysticks[0].binds = binds;

	save(`/Users/dereckrx/Library/Application Support/Joystick Mapper/presets/${data.name}.txt`, preset);
}

generate(factorio);













			