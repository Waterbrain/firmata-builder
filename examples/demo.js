var fs = require('fs');
var path = require('path');

var builder = require('../lib/builder.js');

// builder.build expects and object with this structure
var simulatedUserInput = {
  filename: "ConfiguredFirmata",
  connectionType: {
    serial: {
      baud: 57600
    }
  },
  selectedFeatures: [
    "DigitalInputFirmata",
    "DigitalOutputFirmata",
    "AnalogInputFirmata",
    "AnalogOutputFirmata",
    "ServoFirmata",
    "I2CFirmata",
    "OneWireFirmata",
    "StepperFirmata",
    "FirmataScheduler",
    "EncoderFirmata"
  ]
};

var filename = simulatedUserInput.filename || "ConfiguredFirmata";
var outputText = builder.build(simulatedUserInput);

// write the Arduino .ino file
fs.writeFileSync(filename + '.ino', outputText);