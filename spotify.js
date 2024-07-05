console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let progressBar=document.getElementById('songsrange');
let gif=document.getElementById('songif');
let songItems=Array.from(document.getElementsByClassName('songitems'));
let masterSongName=document.getElementById('mastersongname');

let songs=[
    {songName: "Dhalti Rahe", filePath: "songs/1.mp3" , coverPath: "covers/cover1.jpeg"},
    {songName: "Homage", filePath: "songs/2.mp3" , coverPath: "covers/cover2.jpeg"},
    {songName: "SUMMER", filePath: "songs/3.mp3" , coverPath: "covers/cover1.jpeg"},
    {songName: "Le gyi", filePath: "songs/4.mp3" , coverPath: "covers/cover2.jpeg"},
    {songName: "Chammak challo", filePath: "songs/5.mp3" , coverPath: "covers/cover1.jpeg"},
    {songName: "Saudebazi", filePath: "songs/6.mp3" , coverPath: "covers/cover2.jpeg"},
    {songName: "kuch to hai", filePath: "songs/7.mp3" , coverPath: "covers/cover1.jpeg"},
    {songName: "homaeg", filePath: "songs/8.mp3" , coverPath: "covers/cover2.jpeg"},
    {songName: "Dhalti Rahe", filePath: "songs/9.mp3" , coverPath: "covers/cover1.jpeg"},
]

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }

    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

songItems.forEach((element,i)=>
{   console.log(element,i);
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;

})


audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;

})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
         songIndex=0;

    else
     songIndex+=1;

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
         songIndex=0;

    else
     songIndex-=1;

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})