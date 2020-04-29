// Rover object goes here:

let roverGrid = [         
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ];

   const rover = {
      direction: 'N',
      y:0,
      x:0,
      travelLog: [{x: 0, y: 0}],
    };
  /* let obstacle = {
     y:2,
     x:2,
   };   */                      
 // command function
function command(theRover, moveAllds){
for ( let i = 0; i < moveAllds.length; i++) {
  let moveAlld = moveAllds[i];
   switch(moveAlld) {
     case 'l': turnLeft(theRover);
              break;
     case 'r': turnRight(theRover);
              break;
     case 'f': moveForward(theRover);
              break;
     case 'b': moveBackward(theRover);
              break;
     default: 
     console.log(`cant enter other letters command`);    
      }
      }
    }
command(rover, 'rffrff')

function roverPosition(rover) {
 roverGrid[rover.y][rover.x] = 'R'; 
 roverGrid[rover.y][rover.x] != ' ';
/*if (roverGrid[rover.x][rover.y] ===    roverGrid[obstacle.x][obstacle.y]) {
 console.log(`there is an obstacle`) 
 }*/
console.log(roverGrid.join('\n')); 
}
roverPosition(rover);

function turnRight(rover) {
  console.log('turnRight was called!');
    switch(rover.direction) { 
     case 'N': 
        rover.direction = 'E';
              break;
     case 'E': 
        rover.direction = 'S';
              break;
     case 'S':
        rover.direction = 'W';
              break;
     case 'W':
        rover.direction = 'N';
              break;
           }
  console.log(`Rover direction is ${rover.direction}`);
  }  
function turnLeft(rover) { 
  console.log('turnLeft was called!');  
    switch(rover.direction) { 
     case 'N': rover.direction =  'W';
              break;
     case 'W': rover.direction =  'S';
              break;
     case 'S': rover.direction =  'E';
              break;
     case 'E': rover.direction =  'N'; 
              break;
           }
console.log(`Rover direction is ${rover.direction}`);
}

function moveForward(theRover) {
console.log('the function moveForward was called!');
 
 if (rover.direction === 'N') {
  rover.y--;
} else if (rover.direction === 'E') {
    rover.x++;
} else if (rover.direction === 'S') {
    rover.y++;
} else if (rover.direction === 'W') {
  rover.x--;
} 
console.log(`Rover has position x=${theRover.x}, y=${theRover.y}`);
  let newPosition = { 
    x: theRover.x, 
    y: theRover.y,
    };
for (let i = 0; i > rover.travelLog.length; i++) {
console.log(`travelLog ${i} --- 
x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
} theRover.travelLog.push(newPosition);
 
  //condition to check the grid borders
if ((rover.direction === 'N' && rover.y <= 0) || (rover.direction === 'E' && rover.x >= 9) || (rover.direction === 'S' && rover.y >= 9) || (rover.direction === 'W' && rover.x <= 0)) {
console.log(`ROVER CANT GO OUT OF GRID`);
} 
}
function moveBackward(theRover) {
console.log('the function moveBackward was called!');
  if (rover.direction === 'N') {
         rover.y++;
  } else if (rover.direction === 'E') {
         rover.x--;
  } else if (rover.direction === 'S') {
         rover.y--;
  } else if (rover.direction === 'W') {
        rover.x++;
       }
console.log(`Rover has position x=${theRover.x}, y=${theRover.y}`);
 
let newPosition = { 
        x: theRover.x, 
        y: theRover.y 
        };
for (let i = 0; i > rover.travelLog.length; i++) {
console.log(`travelLog ${i} --- x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
} theRover.travelLog.push(newPosition);
  
  //condition to check the grid borders
if ((rover.direction ==='N' && rover.y <= 9) || (rover.direction === 'E' && rover.x <=0) || (rover.direction === 'S' && rover.y <= 0) || (rover.direction === 'W' && rover.x < 9)) {
console.log(`ROVER CANT GO OUT OF GRID`);
}  
}


