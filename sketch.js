let playing = false;
let myVideo;
let myButton;

function preload() {
  mainMenu = loadImage("images/MainMenu.png");
  game = loadImage("images/Game.png");
  endScreen = loadImage("images/EndScreen.png");
}

function setup() {
  createCanvas(800, 2000);
  
  myVideo = createVideo(['videos/WorkingProject.mp4']);
  myVideo.size(400, 400);
  myVideo.position(50, 1250);
  myButton = createButton('Play Video');
  myButton.mousePressed(PausePlay);
  myButton.position(210, 1660);
}

function PausePlay() {
  if (playing) {
    myVideo.pause();
    playing = false;
  } else {
    myVideo.play();
    playing = true;
  }
}

function draw() {
  background(0, 0, 80);

  // Page
  push();
  stroke(0);
  strokeWeight(8);
  rect(20, 20, 760, 1960);
  rect(20,20, 760, 150);
  pop();

  // Header
  push();
  textAlign(CENTER);
  textSize(80);
  textFont("Roboto");
  text("Pop-A-Lock", 400, 120);
  pop();

  // Project Outline
  push();
  textAlign(LEFT);
  textSize(20);
  text("Project Outline", 100, 250);
  textSize(16);
  text("This project was a final project for my Programming Digital Media (PDM) class", 100, 275);
  text("at Louisiana State University. It is a game that utilizes the p5.js, Tone.js, and", 100, 300);
  text("Arduino libraries.", 100, 325);
  pop();

  // Narrative Description
  push();
  textAlign(LEFT);
  textSize(20);
  text("Narrative Description", 100, 400);
  textSize(16);
  text("You play as a lock picking expert. Your goal is to attempt to 'pop' the lock", 100, 425);
  text("presented before you. It has 50 locks within it, and you must search for each one.", 100, 450);
  text("As you pop locks, you will have less time to search for the next, so be quick!", 100, 475);
  pop();

  // Images of the project
  push();
  textAlign(LEFT);
  textSize(20);
  text("In-Game Images", 100, 550);
  textSize(16);
  text("Main Menu:", 100, 575);
  image(mainMenu, 100, 580, 250, 250);
  text("Game:", 425, 575);
  image(game, 425, 580, 250, 250);
  text("End Screen:", 100, 850);
  image(endScreen, 100, 855, 250, 250);
  pop();

  // Video example of it working
  push();
  textAlign(LEFT);
  textSize(20);
  text("Video of the project (shameless plug)", 100, 1200);
  textSize(16);
  pop();

  // Schematics, diagrams, or other images that help the reader understand the work
  push();
  textAlign(LEFT);
  textSize(20);
  text("Future Development", 100, 1750);
  textSize(16);
  text("This game was inspired by the very famous mobile-game and arcade game Pop-A-Lock.", 100, 1775);
  text("If I were to continue development of the game, I would start with overhauling the", 100, 1800);
  text("graphics. It looks very blocky and basic, but that's because I suck at graphic design.", 100, 1825);
  text("After that, I would spend more time making the music sound more in touch with the", 100, 1850);
  text("actual style of the game. And finally, I would drop Arduino all together and keep", 100, 1875);
  text("a computer-based game. This was a fun project to work on, but I have many ideas", 100, 1900);
  text("for other projects I want to try, so I don't believe I will continue working on this.", 100, 1925);
  text("Thank you for reading!", 100, 1950);
  pop();

  // Thoughts about future development
}
