
let musics=[

    {
        id:1,
        name:"Infected",
        artist:"Sickick",
        audioSrc:"audios/Infected(PaglaSongs).mp3",
        imageSrc:"images/4046_4.jpg"
    },
    {
        id:2,
        name:"Mind Games",
        artist:"Sickick",
        audioSrc:"audios/Sickick---Mind-Games(musicdownload.cc).mp3",
        imageSrc:"images/808_6.jpg"
    },
    {
        id:3,
        name:"Copines",
        artist:"Aya Nakamura",
        audioSrc:"audios/Aya_Nakamura_-_Copines_Clip_offici_(getmp3.pro).mp3",
        imageSrc:"images/maxresdefault.jpg"
    },
    {
        id:4,
        name:"Last Forever",
        artist:"Aeo & Teo",
        audioSrc:"audios/Ayo_Teo_-_Last_Forever_Official_(getmp3.pro).mp3",
        imageSrc:"images/maxresdefault (1).jpg"
    },
    {
        id:5,
        name:"Stereo Love",
        artist:"Edward Maya Vika Jigulina",
        audioSrc:"audios/Edward_Maya_Vika_Jigulina_-_Stere_(getmp3.pro).mp3",
        imageSrc:"images/Stereo Love.jpg"
    },
    {
        id:6,
        name:"Stereo Hearts",
        artist:"Gym Class Heroes",
        audioSrc:"audios/Gym_Class_Heroes_Stereo_Hearts_ft_(getmp3.pro).mp3",
        imageSrc:"images/Stereo Hearts.jpg"
    },
    {
        id:7,
        name:"Choix de vie",
        artist:"Randall x Anas",
        audioSrc:"audios/RANDALL_x_Anas_-_Choix_de_vie_feat_(getmp3.pro).mp3",
        imageSrc:"images/RandallxAnas.jpg"
    },
    {
        id:8,
        name:"Fearless II",
        artist:"NCS",
        audioSrc:"audios/Lost_Sky_-_Fearless_ptII_feat_Ch_(getmp3.pro).mp3",
        imageSrc:"images/NCS Fearless.jpg"
    },
    {
        id:9,
        name:"Bad Boy",
        artist:"Marwa Loud",
        audioSrc:"audios/Marwa_Loud_-_Bad_Boy_Clip_Officiel_(getmp3.pro).mp3",
        imageSrc:"images/Bad Boy.jpg"
    }


]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}