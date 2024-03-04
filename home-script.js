let btw = document.querySelectorAll(".dep");
let slide = document.querySelector(".slide");
let x = 1;
btw.forEach(element => {
    
    element.addEventListener("click", () => {
        btw.forEach(x => {
            x.style.borderBottomColor = "rgba(163, 161, 161, 0.63)";
            let dptment = x.getAttribute("value");
            dptment = document.getElementById(dptment);
            dptment.style.visibility = 'hidden';
        })
        element.style.borderBottomColor = "#d9460c";
        let dptment = element.getAttribute("value");
        dptment = document.getElementById(dptment);
        dptment.style.visibility = "visible";
        // dptment.style.color = "red"
    })
});

setInterval(next, 2000);

function prev() {
    x--;
    if(x < 1) x = 5;
    slide.style.backgroundImage = `url("${"slide" + x + ".jpg"}")`
}

function next() {
    x++;
    if(x > 5) x = 1;
    slide.style.backgroundImage = `url("${"slide" + x + ".jpg"}")`
}

