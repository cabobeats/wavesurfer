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

            wavesurfer.load(audioSrc);

            wavesurfer.on("ready", function() {
                var playButtons = document.querySelectorAll(".js-audio-toggle");
                var playButton = playButtons[index];
                playButton.addEventListener("click", function() {
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
