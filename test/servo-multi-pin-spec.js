var expect = require("chai").expect;
var assert = require('chai').assert;
var servo = require("../lib/servo-multi-pin");

describe("Servo", function(){
  it("should instantiate a board", function(){
    board = new servo.five.Board({
      io: new Particle({
        token: process.env.PARTICLE_TOKEN,
        deviceId: process.env.PARTICLE_DEVICE_ID
      })
    });

    expect(board).to.respond.to("analogWrite()");
  });
});