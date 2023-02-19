const songName = document.getElementById("song-name")
const bandName = document.getElementById("band-name")
const song = document.getElementById("audio")
const cover = document.getElementById("cover")
const play = document.getElementById("play")
const next = document.getElementById("next")
const previous = document.getElementById("previous")

const aggressiveMetalTrailerDragonHeart = {
    songName : 'aggressive Metal Trailer Dragon Heart',
    artist : 'aggressive Metal Trailer Dragon Heart',
    file: 'aggressiveMetalTrailerDragonHeart'
}

const airCombat = {
    songName : 'Air Combat',
    artist : 'Air Combat',
    file: 'airCombat'
}

const metalDarkMatter = {
    songName : 'metal Dark Matter',
    artist : 'metal Dark Matter',
    file: 'metalDarkMatter'
}

let isPlaying =false
const playlist = [aggressiveMetalTrailerDragonHeart, airCombat, metalDarkMatter]
let index = 0

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle')
    play.querySelector('.bi').classList.add('bi-pause-circle')
    song.play();
    isPlaying = true    
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle')
    play.querySelector('.bi').classList.remove('bi-pause-circle')
    song.pause();
    isPlaying = false    
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong()
    }else {
        playSong()
    }
}

function initializedSong(){
    cover.src = `imagens/${playlist[index].file}.jpg`
    song.src = `songs/${playlist[index].file}.mp3`
    songName.innerText = playlist[index].songName
    bandName.innerText = playlist[index].artist
}

function previousSong(){
    if (index === 0){
        index = playlist.length -1
    }else {
        index -= 1
    }
    initializedSong()
    playSong()
}

function nextSong(){
    if (index === playlist.length -1){
        index = 0
    }else {
        index += 1
    }
    initializedSong()
    playSong()
}

initializedSong()

play.addEventListener("click", playPauseDecider)
previous.addEventListener("click", previousSong)
next.addEventListener("click", nextSong)