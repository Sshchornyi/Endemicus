starCount = 300;

let bgColor;
let distributionHeight = 170;
switch ( document.title) {
    case "Ссавці":
        bgColor = "#ff9717";
        //distributionHeight = 1490;
        //starCount = 1000;
        break;
    case "Птахи":
        bgColor = "#fff422";
        break;
    case "Безхребетні":
        bgColor = "#f44ee6";
        break;
    case "Риби":
        bgColor = "#2338d8";
        break;
    case "Плазуни":
        bgColor = "#207933";
        //distributionHeight = 780;
        //starCount = 1000;
        break;
    case "Земноводні":
        bgColor = "#80ff60";
        //distributionHeight = window.innerHeight;

        break;

    default:
        bgColor = "#0bae44"

}


function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Position
    star.style.left = Math.random() * 97 + 'vw';
    star.style.top = Math.random() * distributionHeight + 'vh';
    console.log(document.documentElement.scrollHeight)

    // Size
    const size = Math.random() * 10 + 5; // Size between 2px and 7px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = bgColor;
    // Animation duration
    const duration = Math.random() * 8 + 5; // Duration between 2s and 5s
    star.style.animationDuration = duration + 's';
    star.style.position = "fixed";

    document.body.appendChild(star);
}


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < starCount; i++) {
        createStar();
    }
});