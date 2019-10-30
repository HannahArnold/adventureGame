alert("Welcome to the adventure, you must find 5 gems to win");
let user = prompt("What is your name");
alert("Hello " + user);
alert("You see two doors one to the left");
alert("and one to the right");
let direction = prompt("which way do you go");
if (direction == "left") {
  alert(
    "you enter and something drips onto your head, you check your watch 5 hours passed"
  );
} else if (direction == "right") {
  alert("you enter the right door and find the first gem a ruby, continue on");
}

let second = prompt("you come across a new door which way");
if (second == "right") {
  alert(
    "you enter a room, and slowly fall into a lava pit but catch onto the ledge it takes half an hour to get back up"
  );
} else if (second == "left") {
  alert("you enter the left door and find the second gem a emerald");
}

let three = prompt("the third set of doors which way?");
if (three == "right") {
  alert(
    "you enter, thinking the room is ok so you decide to step forward and end up falling into water"
  );
  //takes 2.5 hours to dry out
} else if (three == "left") {
  alert("you walk in to find the third gem the pearl");
}

let four = prompt("your one set away from the end what way now");
if (four == "left") {
  alert("you slowly enter scared of whats in there. SNAKES!!!");
} else if (four == "right") {
  alert("you find the second to last gem a lapis");
}

let five = prompt("the last set, enter the right one for the big prize");
if (five == "right") {
  alert(
    "As you enter you feel the room growing smaller, you clammer on the walls pushing a button and escaping"
  );
  //takes 45 mins to escape
} else if (five == "left") {
  alert("you find the last gem the emerald");
}
alert("congratulations on winning");
