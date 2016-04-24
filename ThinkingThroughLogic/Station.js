var Station = function (name, line, direction, trainExits) {
  this.name = name;
  this.line = line;
  // if we know start and end
  // this doesn't really matter
  // from a user perspective
  // but I think I need it.
  this.direction = 'aleweife';

  if (direction === 'northbound') {
    this.exits = [
      {
        doorService: [new Car(0,"left", "back"), new Car(1, "left", "front")],
        exitName: "chaucy",
        access: ['stairs', 'escalator', 'elevator', 'ramp', 'flat'],
      },
      {
        doorService: [new Car(0,"left", "back"), new Car(1, "left", "front")],
        exitName: "chaucy",
        access: ['stairs', 'escalator', 'elevator', 'ramp', 'flat'],
      }
    ]
  } else {
    this.exits = [
      {
        doorService: [new Car(0,"left", "back"), new Car(1, "left", "front")],
        exitName: "chaucy",
        access: ['stairs', 'escalator', 'elevator', 'ramp', 'flat'],
      }
    ]
  }

  // function that says which
}

/*

  Station has a train which tells which exits are closest by door.


  Think of a station in terms of a train.


  Mass ave:
  this.direction = 'oak grove'
  exits are (related to train):
    train[0].front.left = ['elevator', 'escalator', 'stairs']
    train[5].back.left = ['stairs']

  exitsFromStation:
    isHandicapAccessible
    closestTrainExit


  Ruggles:
    train[4].back.left


*/
