console.log("Script is loaded and executing");

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var waveformContainers = document.querySelectorAll(".waveform-container");
        waveformContainers.forEach(function(container, index) {
            var audioSrc = container.getAttribute("data-audio-src");
            
            var wavesurfer = WaveSurfer.create({
                container: container,
                waveColor: "#f01d1d",
                progressColor: "#fe2d0e",
                cursorColor: "#000000",
                barWidth: 2,
                height: 64,
                minPxPerSec: 50
            });

            console.log("WaveSurfer instance created");

            wavesurfer.load(audioSrc);
            console.log("Attempting to load audio from:", audioSrc);

            wavesurfer.on("ready", function() {
                console.log("WaveSurfer is ready");
                var playButtons = document.querySelectorAll(".js-audio-toggle");
                var playButton = playButtons[index];
                playButton.addEventListener("click", function() {
                    console.log("Play button clicked");
                    wavesurfer.playPause();
                    playButton.querySelector(".play-icon").classList.toggle("fa-play");
                    playButton.querySelector(".play-icon").classList.toggle("fa-pause");
                    playButton.querySelector(".stop-icon").classList.toggle("fa-play");
                    playButton.querySelector(".stop-icon").classList.toggle("fa-pause");
                });
            });
        });
    }, 500);
});
