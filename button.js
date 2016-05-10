// http://pinout.xyz/pinout/wiringpi_gpio_pinout

var wpi = require('wiring-pi');
wpi.setup('wpi');

var started = false;
var clock = null;

var teamAplus = 15;
var teamAminus = 6;

var teamBplus = 25;
var teamBminus = 14;

var started = false;
var clock = null;

var pressedPin = -1;

wpi.pinMode(teamAplus, wpi.INPUT);
wpi.pullUpDnControl(teamAplus, wpi.PUD_UP);
wpi.wiringPiISR(teamAplus, wpi.INT_EDGE_FALLING, function() {
	if (wpi.digitalRead(teamAplus)) {
		if (false === started) {
			started = true;
			pressedPin = teamAplus;
			clock = setTimeout(score, 250);
		}
	} else {
		started = false;
		clearTimeout(clock);
	}
});

wpi.pinMode(teamAminus, wpi.INPUT);
wpi.pullUpDnControl(teamAminus, wpi.PUD_UP);
wpi.wiringPiISR(teamAminus, wpi.INT_EDGE_FALLING, function() {
	if (wpi.digitalRead(teamAminus)) {
		if (false === started) {
			started = true;
			pressedPin = teamAminus;
			clock = setTimeout(score, 250);
		}
	} else {
		started = false;
		clearTimeout(clock);
	}
});

wpi.pinMode(teamBplus, wpi.INPUT);
wpi.pullUpDnControl(teamBplus, wpi.PUD_UP);
wpi.wiringPiISR(teamBplus, wpi.INT_EDGE_FALLING, function() {
	if (wpi.digitalRead(teamBplus)) {
		if (false === started) {
			started = true;
			pressedPin = teamBplus;
			clock = setTimeout(score, 250);
		}
	} else {
		started = false;
		clearTimeout(clock);
	}
});

wpi.pinMode(teamBminus, wpi.INPUT);
wpi.pullUpDnControl(teamBminus, wpi.PUD_UP);
wpi.wiringPiISR(teamBminus, wpi.INT_EDGE_FALLING, function() {
	if (wpi.digitalRead(teamBminus)) {
		if (false === started) {
			started = true;
			pressedPin = teamBminus;
			clock = setTimeout(score, 250);
		}
	} else {
		started = false;
		clearTimeout(clock);
	}
});

function score() {
	if (pressedPin === teamAplus) {
		console.log('team A ++' + pressedPin);
	} else if (pressedPin === teamAminus) {
		console.log('team A -- ' + pressedPin);
	} else if (pressedPin === teamBplus) {
		console.log('team B ++ ' + pressedPin);
	} else if (pressedPin === teamBminus) {
		console.log('team B -- ' + pressedPin);
	}
}