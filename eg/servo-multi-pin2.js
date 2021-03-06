var five = require("../../johnny-five/lib/johnny-five"),
  Particle = require("../lib/particle"),
  temporal = require('temporal'),
  board;

// Create Johnny-Five board connected via Particle
board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {

  temporal.queue([
    {
      delay: 0,
      task: function(){
        // Use the analogWrite function to control the servo rotation.
        console.log('Turning Pin D0 analogWrite at 200 700 miliseconds');

        board.analogWrite("D0", 200);
      }
    },{
      delay: 4700,
      task: function(){
        console.log('Stop');
        board.analogWrite("D0", 0);
      }
    }
    // ,{
    //   delay: 5000,
    //   task: function(){
    //     console.log('Change Pin');
    //   }
    // },{
    //   delay: 0,
    //   task: function(){
    //     console.log('Turning Pin D1 analogWrite at 200 700 miliseconds');
    //     board.analogWrite("D1", 200);

    //   }
    // },{
    //   delay: 700,
    //   task: function(){
    //     console.log('Stop');
    //     board.analogWrite("D1", 0);

    //   }
    // }
  ]);
});