const cylon = require('cylon');

class LEDRobot {
  constructor() {
    this.robot = null;
  }
  setLedRobotConfiguration() {
    this.robot = cylon
      .robot({
        // Change the port to the correct port for your Arduino.
        connections: {
          arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' },
        },
        devices: {
          led: { driver: 'led', pin: 13 },
        },
      })
      .start();
  }
  startLED() {
    console.log('START LED');
    this.robot.devices.led.turnOn();
  }
  stopLED() {
    console.log('STOP LED');
    this.robot.devices.led.turnOff();
  }
  // turn off after 3 seconds
  stopLEDIn() {
    after((3).seconds(), function(){
      this.robot.devices.led.turnOff();
    })
  }
  // on off after every 1 sec
  blinkLED() {
    every((1).second(), function() {
      this.robot.devices.led.toggle();
    });
  }
  // change brightness per seconds
  changeBrightness() {
    var brightness = 0;
    var change = 5;

    every((1).second(), function() {
      this.robot.devices.led.brightness(brightness);

      brightness += change;

      if(brightness < 0 || brightness > 255) {
        change = -change;
      }
    });
  }
}

module.exports = new LEDRobot();
