const SPI = require('spi');
const NokiaScreen = require('./index');

let spi = new SPI.Spi('/dev/spidev0.0', {'mode': SPI.MODE['MODE_0']});
spi.maxSpeed(40000); // 4mhz
spi.open();

let screen = new NokiaScreen(3, 5, spi);
screen.begin(40, 4).then( () => {
	console.log("Screen is ready");
	screen.display()
	.catch( err => {
		console.log(`Error on display: `, err);
	});
})
.catch( err => {
	console.log(`Error on begin: `, err);
});
