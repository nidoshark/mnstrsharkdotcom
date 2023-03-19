
var foyer_sound = new Audio('audio/philly_hit.wav');
var explode_sound = new Audio('audio/explode.wav');

// cog wheel variables
function updateBodyWidth() {
    document.body.style.setProperty('--panel-width', Math.min(Math.max(window.innerWidth * 0.8, 640), 950) + 'px');
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);
}, false);

window.addEventListener('resize', () => { updateBodyWidth(); }, false);
window.addEventListener('load', () => {
    updateBodyWidth();
}, false);


// sound stuff
function foyerEnd(ele) {
    ele.src = 'images/delver_dance.gif';
    ele.onclick = () => {
     playFoyer(ele);   
    };
    ele.style.cursor = 'pointer'
}

function playFoyer(ele) {    
    foyer_sound.play();
    ele.onclick = '';
    ele.style.cursor = '';
    ele.src = 'images/thumb.png';
    window.setTimeout(foyerEnd, 600, ele);
}




function playNav() {
    var audio = document.getElementById('blip')
    var href = event.target.href;

    if (audio.canPlayType('audio/wav') != "") {
        audio.addEventListener('ended', function () {
            window.location.href = href;
        })

        audio.addEventListener('error', function () {
            window.location.href = href;
        })

        event.preventDefault();
        audio.play();
    } else {
        // just skip it
        window.location.href = href;
    }
}

function mnstrClick(ele) {
    explode_sound.play();
    ele.onclick = ''
    ele.style.cursor = ''
    ele.src = 'assets/explode.gif';
    window.setTimeout(mnstrEnd, 700, ele);
}

function mnstrEnd(ele) {
    ele.style.display = 'none';
}