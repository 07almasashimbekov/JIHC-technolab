// indicator

const indicator = document.querySelector('#indicator');
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const percentage = (window.scrollY / maxHeight) * 100;
    indicator.style.width = `${percentage}%`;
});







var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//text
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
    if (index < pun.length) {
        typed += pun.charAt(index);
        element.innerHTML = typed;
        index++;
        setTimeout(function() {
            startType(pun, index);
        }, 90);
    } else {
        setTimeout(function() {
            element.classList.add("highlight");
        }, 4000);

        setTimeout(function() {
            element.classList.remove("highlight");
            typed = "";
            element.innerHTML = typed;
            startType(getRandomPun(), 0);
        }, 5000);
    }
}

function getRandomPun() {
    const puns = [
        "Jambyl Innovation higher college Technolab"
    ];
    const index = Math.floor(Math.random() * puns.length);

    return puns[index];
}

startType(getRandomPun(), 0);

//burger
(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());