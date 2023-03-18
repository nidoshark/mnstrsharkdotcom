window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);
}, false);

window.addEventListener('resize', () => {
    document.body.style.setProperty('--panel-width', Math.min(Math.max(window.innerWidth * 0.8, 640), 950) + 'px');
}, false);

window.addEventListener('load', () => {
    document.body.style.setProperty('--panel-width', Math.min(Math.max(window.innerWidth * 0.8, 640), 950) + 'px');
}, false);

function playFoyer() {
    var audio = new Audio('audio/foyer.ogg');
    audio.play();
}

function playNav() {
    var audio = new Audio('audio/getfruit.ogg');
    var href = event.target.href;

    audio.addEventListener('ended', function () {
        window.location.href = href;
    })
    event.preventDefault();
    audio.play();
}
