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

  // Create a new `servo` hardware instance.
  // var servo = new five.Servo({
  //   pin: "D0",
  //   // `type` defaults to standard servo.
  //   // For continuous rotation servos, override the default
  //   // by setting the `type` here
  //   type: "continuous"
  // });

  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  // board.repl.inject({
  //   servo: servo
  // });


  // Set an LED to full brightness
  // this.analogWrite("D0", 200);

  // OR...

  // Set an LED to half brightness
  // this.analogWrite("A7", 128);

  // });
  temporal.queue([
    {
      delay: 0,
      task: function(){
        // min()
        //
        // set the servo to the minimum degrees
        // defaults to 0
        //
        console.log('Turning Pin D0 analogWrite at 200 600 miliseconds');

        board.analogWrite("D0", 200);

      }
    },{
      delay: 700,
      task: function(){
        // stop(  )
        //
        // Stop a moving servo
        console.log('Stop');
        board.analogWrite("D0", 0);

      }
    },{
      delay: 5000,
      task: function(){
        // stop(  )
        //
        // Stop a moving servo
        console.log('Change Pin');
      }
    },{
      delay: 0,
      task: function(){
        // stop(  )
        //
        // Stop a moving servo
        console.log('Turn pin D1');
        board.analogWrite("D1", 200);

      }
    },{
      delay: 700,
      task: function(){
        // stop(  )
        //
        // Stop a moving servo
        console.log('Stop');
        board.analogWrite("D1", 0);

      }
    }
  ]);
  // Continuous Rotation Servo API

  // cw( speed )
  // clockWise( speed)
  // ccw( speed )
  // counterClockwise( speed )
  //
  // Set the speed at which the continuous rotation
  // servo will rotate at, either clockwise or counter
  // clockwise, respectively
  //servo.ccw(0.001); // half speed clockwise
  // servo.stop();
  // servo.cw(0.2);

  // console.log('Turning CW at speed 0.2 for 1000 miliseconds');

  // delay(180)
  // servo.stop();

  // console.log('Stop');
  // servo.stop();
  // setTimeout(function() {
  //   servo.ccw(0.1);
  //   console.log('Stop');
  // }, 1000);


});