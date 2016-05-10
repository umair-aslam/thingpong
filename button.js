var wpi = require('wiring-pi');

wpi.setup('wpi');
wpi.pinMode(7, wpi.INPUT);
wpi.pullUpDnControl(7, wpi.PUD_UP);
wpi.wiringPiISR(7, wpi.INT_EDGE_FALLING, function(delta){
	console.log('Pin 7 changed to Low (', delta, ')');
});