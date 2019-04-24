let a = document.querySelector('div');
let {width: w, height: h} = window.getComputedStyle(a);
w = parseFloat(w);
h = parseFloat(h);
a.style.width = w;
a.style.height = h;

window.addEventListener('deviceorientation', (e) => {
    // a.height = h * Math.cos(e.gamma);
    // a.width = w * Math.cos(e.alpha);
    aspan.innerText = h * Math.cos(e.gamma);
    bspan.innerText = w * Math.cos(e.alpha);
});