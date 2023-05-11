/* SARA QUÍLEZ */

window.onload = function() {
    const fileSelector = document.getElementById('fileSelector');
    const videoPlayer = document.getElementById('videoPlayer');
    const loadingMessage = document.getElementById('loadingMessage');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    const volUpButton = document.getElementById('volUpButton');
    const volDownButton = document.getElementById('volDownButton');

    fileSelector.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file.type.startsWith('video/')) {
            const fileURL = URL.createObjectURL(file);
            videoPlayer.src = fileURL;
            loadingMessage.style.display = 'block';
        } else {
            alert('Por favor, selecciona un archivo de video.');
        }
    });

    videoPlayer.addEventListener('canplay', function() {
        loadingMessage.style.display = 'none';
    });

    playButton.addEventListener('click', function() {
        videoPlayer.play();
    });

    stopButton.addEventListener('click', function() {
        videoPlayer.pause();
    });

    volUpButton.addEventListener('click', function() {
        if (videoPlayer.volume < 1) {
            videoPlayer.volume += 0.1;
        }
    });

    volDownButton.addEventListener('click', function() {
        if (videoPlayer.volume > 0) {
            videoPlayer.volume -= 0.1;
        }
    });
};