// http://pinout.xyz/pinout/wiringpi_gpio_pinout

var wpi = require('wiring-pi');
wpi.setup('wpi');

var started = false;
var clock = null;

var teamAplus = 15;
var teamAminus = 6;

var teamBplus = 25;
var teamBminus = 14;

wpi.pinMode(teamAplus, wpi.INPUT);
wpi.pullUpDnControl(teamAplus, wpi.PUD_UP);
wpi.wiringPiISR(teamAplus, wpi.INT_EDGE_FALLING, function() {
	setTimeout(score(pin), 250);
});
wpi.pinMode(teamAminus, wpi.INPUT);
wpi.pullUpDnControl(teamAminus, wpi.PUD_UP);
wpi.wiringPiISR(teamAminus, wpi.INT_EDGE_FALLING, function() {
	setTimeout(score(pin), 250);
});

wpi.pinMode(teamBplus, wpi.INPUT);
wpi.pullUpDnControl(teamBplus, wpi.PUD_UP);
wpi.wiringPiISR(teamBplus, wpi.INT_EDGE_FALLING, function() {
	setTimeout(score(pin), 250);
});
wpi.pinMode(teamBminus, wpi.INPUT);
wpi.pullUpDnControl(teamBminus, wpi.PUD_UP);
wpi.wiringPiISR(teamBminus, wpi.INT_EDGE_FALLING, function() {
	setTimeout(score(pin), 250);
});


function score(pin) {
	if (pin === teamAplus) {
		console.log('team A ++' + pin)
	} else if (pin === teamAminus) {
		console.log('team A -- ' + pin)
	} else if (pin === teamBplus) {
		console.log('team B ++ ' + pin)
	} else if (pin === teamBminus) {
		console.log('team B -- ' + pin)
	}
}