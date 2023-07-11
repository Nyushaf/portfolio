AOS.init({
    duration: 1500
});
gsap.from (".navbar-color", {duration: 2, y: -100, ease: "power4", opacity: 0, delay: .5})
gsap.from (".logo", {duration: 2, opacity: 0, ease: "power4", delay: 1})
gsap.to('.typing-text', { 
    text: "My name is Anna Filina",
    duration: 4,
    delay: 1,  
    ease: 'power1.in',
    repeat: 1,
    repeatDelay: .7,
    yoyo: true
})
gsap.to('.typing-text', { 
    text: "Welcome to my portfolio",
    duration: 4,
    delay: 9.2,  
    ease: 'power1.in',
    repeat: 0,
    repeatDelay: .7,
    yoyo: false,
})
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFFBAC"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFFBAC",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
gsap.to ("#imageAnimation", {duration: 2, rotation: 45, ease: "bounce", repeat: -1, yoyo: true})
const projectBoxOne = document.querySelector(".what-to-do");
const projectBoxTwo = document.querySelector(".running");
const projectBoxThree = document.querySelector(".wedding");
const projectBoxFour = document.querySelector(".world-quiz");
const projectBoxFive = document.querySelector(".furniture");
const projectBoxSix = document.querySelector(".burger-rest");
projectBoxOne.addEventListener("mouseover", showTextOne);
projectBoxOne.addEventListener('mouseout', hideTextOne);
function showTextOne() {
    gsap.to('.one', {duration: .7, delay: .1, opacity: 1})
};
function hideTextOne() {
    gsap.to('.one', {duration: .7, delay: .1, opacity: 0})
}
projectBoxTwo.addEventListener("mouseover", showTextTwo);
projectBoxTwo.addEventListener('mouseout', hideTextTwo);
function showTextTwo() {
    gsap.to('.two', {duration: .7, delay: .1, opacity: 1})
};
function hideTextTwo() {
    gsap.to('.two', {duration: .7, delay: .1, opacity: 0})
}
projectBoxThree.addEventListener("mouseover", showTextThree);
projectBoxThree.addEventListener('mouseout', hideTextThree);
function showTextThree() {
    gsap.to('.three', {duration: .7, delay: .1, opacity: 1})
};
function hideTextThree() {
    gsap.to('.three', {duration: .7, delay: .1, opacity: 0})
}
projectBoxFour.addEventListener("mouseover", showTextFour);
projectBoxFour.addEventListener('mouseout', hideTextFour);
function showTextFour() {
    gsap.to('.four', {duration: .7, delay: .1, opacity: 1})
};
function hideTextFour() {
    gsap.to('.four', {duration: .7, delay: .1, opacity: 0})
}
projectBoxFive.addEventListener("mouseover", showTextFive);
projectBoxFive.addEventListener('mouseout', hideTextFive);
function showTextFive() {
    gsap.to('.five', {duration: .7, delay: .1, opacity: 1})
};
function hideTextFive() {
    gsap.to('.five', {duration: .7, delay: .1, opacity: 0})
}
projectBoxSix.addEventListener("mouseover", showTextSix);
projectBoxSix.addEventListener('mouseout', hideTextSix);
function showTextSix() {
    gsap.to('.six', {duration: .7, delay: .1, opacity: 1})
};
function hideTextSix() {
    gsap.to('.six', {duration: .7, delay: .1, opacity: 0})
}