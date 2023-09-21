console.log("page loaded...");

const video = document.querySelector("#video");

// Agregamos el evento 'mouseover' para reproducir el video al pasar el cursor sobre él
video.addEventListener("mouseover", function () {
    if (video.paused) {
        video.play();
    }
});

// Agregamos el evento 'mouseout' para pausar el video cuando se retira el cursor
video.addEventListener("mouseout", function () {
    if (!video.paused) {
        video.pause();
    }
});
