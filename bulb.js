function switchOn() {
    let light = document.getElementsByClassName('virtual');
    let upperBulb = document.getElementsByClassName('top');
    let middleBulb = document.getElementsByClassName('middle');
    let footerBulb = document.getElementsByClassName('bottom');
    let button = document.getElementById('bt');
    let pointer = document.getElementById('pointer');

    function lightness() {
        document.body.style.backgroundColor = "#ffffdd";
        button.style.backgroundColor = "#cdcdbc";
        button.style.color = "#282828";
        button.style.borderColor = "#282828";
        footerBulb[0].style.backgroundColor = "#909080";
        footerBulb[1].style.backgroundColor = "#909080";
        pointer.textContent = "";
        pointer.style.textShadow = "none";
    }

    for (let i=0; i<=3; i++) {
        upperBulb[i].style.backgroundColor = "#ffff00";
    }

    for (let i=0; i<=1; i++) {
        middleBulb[i].style.backgroundColor = "#ffff00";
        light[i].style.boxShadow = "0 0 200vh 4vh #ffff5c, 0 0 3vh #ffff00";
        footerBulb[i].style.backgroundColor = "#707060";
    }
    setTimeout(lightness, 80);
    button.onclick = switchOff;
}

function switchOff() {
    let light = document.getElementsByClassName('virtual');
    let upperBulb = document.getElementsByClassName('top');
    let middleBulb = document.getElementsByClassName('middle');
    let footerBulb = document.getElementsByClassName('bottom');
    let button = document.getElementById('bt');
    let pointer = document.getElementById('pointer');

    function darkness() {
        document.body.style.backgroundColor = "#333333";
        button.style.backgroundColor = "#252525";
        button.style.color = "#ffffdd";
        button.style.borderColor = "#ffffdd";
        footerBulb[0].style.backgroundColor = "#252525";
        footerBulb[1].style.backgroundColor = "#252525";
    }

    for (let i=0; i<=3; i++) {
        upperBulb[i].style.backgroundColor = "#505050";
    }

    for (let i=0; i<=1; i++) {
        middleBulb[i].style.backgroundColor = "#505050";
        light[i].style.boxShadow = "";
        footerBulb[i].style.backgroundColor = "#454545";
    }
    setTimeout(darkness, 70);
    button.onclick = switchOn;
}

alert("When leaving the house, don't forget to turn off the light");

