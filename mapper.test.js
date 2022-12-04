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