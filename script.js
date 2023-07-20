var video = document.getElementById("landing-video");
var enterButton = document.querySelector(".enter-button");

video.addEventListener("loadedmetadata", function() {
    resizeVideo();
    window.addEventListener("resize", resizeVideo);
});

function resizeVideo() {
    var container = document.querySelector(".video-container");
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    var videoWidth = video.videoWidth;
    var videoHeight = video.videoHeight;

    var widthRatio = containerWidth / videoWidth;
    var heightRatio = containerHeight / videoHeight;
    var scale = Math.max(widthRatio, heightRatio);

    video.style.width = videoWidth * scale + "px";
    video.style.height = videoHeight * scale + "px";
    video.style.left = (containerWidth - video.offsetWidth) / 2 + "px";
    video.style.top = (containerHeight - video.offsetHeight) / 2 + "px";

    var buttonTop = video.offsetTop + video.offsetHeight / 2 - enterButton.offsetHeight / 2;
    enterButton.style.top = buttonTop + "px";
}

function playVideo() {
    video.play();
    video.addEventListener("ended", function() {
        video.pause();
        video.currentTime = video.duration;
    });
}

function stopVideo() {
    video.pause();
    video.currentTime = video.duration;
}

function fadeOutEnterButton() {
    enterButton.classList.add("fade-out");
}