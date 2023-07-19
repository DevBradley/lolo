/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 49.0201925508355,
        y: 46.01893051640829
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.goto(0, 0);
  }

  *whenthisspriteclicked() {
    this.stage.vars.score++;
    this.size -= 2;
    yield* this.wait(0.1);
    this.size -= 2;
    yield* this.wait(0.1);
    this.size -= 2;
    yield* this.wait(0.1);
    this.size -= 2;
    this.size += 2;
    yield* this.wait(0.1);
    this.size += 2;
    yield* this.wait(0.1);
    this.size += 2;
    yield* this.wait(0.1);
    this.size += 2;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.size = 100;
      this.size += 2;
      yield* this.wait(0.4);
      this.size += 2;
      yield* this.wait(0.4);
      this.size += 2;
      yield* this.wait(0.4);
      this.size += 2;
      this.size -= 2;
      yield* this.wait(0.4);
      this.size -= 2;
      yield* this.wait(0.4);
      this.size -= 2;
      yield* this.wait(0.4);
      this.size -= 2;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.glide(0.6, 0, 3);
      yield* this.wait(2);
      yield* this.glide(0.6, 0, 0);
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.size, 89) < 0) {
        this.size = 100;
      }
      yield;
    }
  }
}
