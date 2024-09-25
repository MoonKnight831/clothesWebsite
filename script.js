const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
    
}

// var MainImg = document.getElementById("Mainimg");
// var Small = document.getElementsByClassName("small-img");

// for (var i = 0; i < Small.length; i++) {
//     Small[i].onclick = function () {
//         MainImg.src = this.src;
//     }
// }