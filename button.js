var wpi = require('wiring-pi');
wpi.setup('wpi');

var teamAplus = 15;
var teamBplus = 25

wpi.pinMode(teamAplus, wpi.INPUT);
wpi.pullUpDnControl(teamAplus, wpi.PUD_UP);
wpi.wiringPiISR(teamAplus, wpi.INT_EDGE_FALLING, function(){
	handleButton(greenButton);
});

wpi.pinMode(teamBplus, wpi.INPUT);
wpi.pullUpDnControl(teamBplus, wpi.PUD_UP);
wpi.wiringPiISR(teamBplus, wpi.INT_EDGE_FALLING, function(){
	handleButton(teamBplus);
});


function handleButton(pin) {
	if(wpi.digitalRead(pin)) {
		if(pin === teamAplus) {
			console.log('team A ++' + pin)
		} else if (pin === teamBplus) {
			console.log('team B ++ ' + pin)
		}
	}
}