var wpi = require('wiring-pi');
wpi.setup('wpi');

var started = false;
var clock = null;

var teamAplus = 15;
var teamBplus = 25;

wpi.pinMode(teamAplus, wpi.INPUT);
wpi.pullUpDnControl(teamAplus, wpi.PUD_UP);
wpi.wiringPiISR(teamAplus, wpi.INT_EDGE_FALLING, function() {
	handleButton(teamAplus);
});

wpi.pinMode(teamBplus, wpi.INPUT);
wpi.pullUpDnControl(teamBplus, wpi.PUD_UP);
wpi.wiringPiISR(teamBplus, wpi.INT_EDGE_FALLING, function() {
	handleButton(teamBplus);
});


function handleButton(pin) {
	if (wpi.digitalRead(pin)) {
		if (false === started) {
			started = true;
			clock = setTimeout(score(pin), 250);
		} else {
			started = false;
			clearTimeout(clock);
		}
	}
}

function score(pin) {
	if (pin === teamAplus) {
		console.log('team A ++' + pin)
	} else if (pin === teamBplus) {
		console.log('team B ++ ' + pin)
	}
}