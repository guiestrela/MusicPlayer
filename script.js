const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause")

songName.innerText = "air-combat";

function playSong(){
    song.play();
    
}

play.addEventListener("click", playSong)

function pauseSong(){
    song.pause();

}

pause.addEventListener("click", pauseSong)