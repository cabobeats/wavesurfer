document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        const audioSrc = "https://dl.dropboxusercontent.com/s/lyg3e2m3cq12t5l/korupt%202.mp3";
        const wavesurfer = WaveSurfer.create({
            container: document.querySelector('.audio-container #waveform'),
            waveColor: "#ffffff",
            progressColor: "#fe2d0e",
            cursorColor: "#ffffff",
            barWidth: 2,
            height: 64,
            minPxPerSec: 50
        });
        wavesurfer.load(audioSrc);
        wavesurfer.on("ready", function () {
            const playButton = document.querySelector(".audio-container .js-audio-toggle");
            playButton.addEventListener("click", function () {
                wavesurfer.playPause();
                playButton.querySelector(".play-icon").classList.toggle("fa-play");
                playButton.querySelector(".play-icon").classList.toggle("fa-pause");
                playButton.querySelector(".stop-icon").classList.toggle("fa-play");
                playButton.querySelector(".stop-icon").classList.toggle("fa-pause");
            });
        });
    }, 500); // 500ms delay
});
