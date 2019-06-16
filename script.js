window.addEventListener('load', function () {
    var button = document.querySelector('#nav-button');
    var nav = document.querySelector('.navigation');

    button.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        } else {
            nav.classList.add('open');
        }
    });

    let div = document.getElementsByClassName('circle');
    
    console.log(div);
    for (var i in div){
    div[i].addEventListener('click', function () {
//        let clicked = evt.background-Image;
        let clicked = window.getComputedStyle(this, 
    null).getPropertyValue('background-Image');
        let source = clicked.slice(4, -1).replace(/"/g, "");
        console.log(source);
//        let source = clicked.url;
        document.querySelector('#lightbox img').setAttribute('src', source);
        document.querySelector('#lightbox').classList.add('show');
        document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('#lightbox').classList.remove('show');
        });
        let lightbox = document.getElementById("lightbox")
        window.onclick = function(event) {
  if (event.target == lightbox) {
    document.querySelector('#lightbox').classList.remove('show');
  }
}
        
    });}

});