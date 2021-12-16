const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'ReactNative', 'React', 'Express',
    'VueJS', 'Redux', 'Redis',
    'Bootstrap', 'Node.js', 'Docker',
    'PostgreSQL', 'MongoDB', 'jQuery',
];

const x = window.matchMedia("(max-width: 576px)")
let radius = 250
if (x.matches) { // If media query matches
    radius = 170
}

var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: radius,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

});

document.querySelector('.content').style.color = "#171717";