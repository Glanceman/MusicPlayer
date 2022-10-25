
let canvasSize = [window.innerWidth, window.innerHeight]
let songs = [];
let currentSongIndex = 0;
let btns = [];
let imgs = {};
function preload() {
    let song = loadSound('./assets/bensound-sadday.mp3');
    let song1= loadSound('./assets/bensound-enigmatic.mp3');
    songs.push(
        {
            id:0,
            name:"Sadday",
            musicSequence: song,
        },
        {
            id:0,
            name:"Enigmatic",
            musicSequence: song1,
        },
    );
    imgs.playbtn = loadImage('./assets/play-button.png');
    imgs.pasuebtn = loadImage('./assets/pause-button.png');
    imgs.stopbtn = loadImage("./assets/stop-button.png");
    imgs.nextbtn = loadImage("./assets/next.png")
    imgs.previousbtn = loadImage("./assets/previous.png")
}

function setup() {

    createCanvas(...canvasSize);
    // btn=new Clickable();
    // btn.locate(width/2, height*9/10);
    let playbtn = new SButton(width / 2, height * 9 / 10, 100, 100, imgs.playbtn, imgs.pasuebtn);
    playbtn.onPress = () => {
        console.log("Press play")
        if (songs[currentSongIndex].musicSequence.isPlaying()) {
            songs[currentSongIndex].musicSequence.pause();
            playbtn.image = playbtn.initImg;
        } else {
            songs[currentSongIndex].musicSequence.play();
            playbtn.image = playbtn.finalImg;
        }
    }
    btns.push(playbtn);

    let stopbtn = new SButton(width / 2 + 120, height * 9 / 10, 80, 80, imgs.stopbtn);
    stopbtn.onPress = () => {
        console.log("Press stop")
        if (songs[currentSongIndex].musicSequence.isPlaying()) {
            songs[currentSongIndex].musicSequence.stop();
            playbtn.reset();
        }
    }
    btns.push(stopbtn);

    let previousbtn = new SButton(width / 2 -240, height * 9 / 10, 80, 80, imgs.previousbtn);
    previousbtn.onPress = () => {
        console.log("Press previous")
        if (songs[currentSongIndex].musicSequence.isPlaying()) {
            songs[currentSongIndex].musicSequence.stop();
            playbtn.reset();
        }
        currentSongIndex=(currentSongIndex-1)<0? 0:(currentSongIndex-1);
    }
    btns.push(previousbtn);

    let nextbtn = new SButton(width / 2 -120, height * 9 / 10, 80, 80, imgs.nextbtn);
    nextbtn.onPress = () => {
        console.log("Press previous")
        if (songs[currentSongIndex].musicSequence.isPlaying()) {
            songs[currentSongIndex].musicSequence.stop();
            playbtn.reset();
        }
        currentSongIndex=(currentSongIndex+1)>=songs.length? songs.length-1:(currentSongIndex+1);
    }
    btns.push(nextbtn);
    

}

function Update() {

}

function draw() {
    let bgcolor = [230, 230, 230];
    background(...bgcolor);
    Update();
    btns.forEach((btn) => {
        btn.draw();
    })
}

// function mousePressed() {
//     if (songs[0].isPlaying()) {
//         // .isPlaying() returns a boolean
//         songs[0].stop();
//         background(255, 0, 0);
//     } else {
//         songs[0].play();
//         background(0, 255, 0);
//     }
// }

window.onresize = () => {
    canvasSize = [window.innerWidth, window.innerHeight]
    resizeCanvas(canvasSize[0], canvasSize[1])
}