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

    let images = document.querySelector('.circle');
    images.addEventListener('click', function (evt) {
//        let clicked = evt.backgroundImage;
        let clicked = window.getComputedStyle(this, 
    null).getPropertyValue("background-Image");
        let source = clicked.slice(4, -1).replace(/"/g, "");
        console.log(images);
//        let source = clicked.url;
        document.querySelector('#lightbox img').setAttribute('src', source);
        document.querySelector('#lightbox').classList.add('show');
        document.querySelector('.close').addEventListener('click', function () {
            document.querySelector('#lightbox').classList.remove('show');
        });
        var lightbox = document.getElementById("lightbox")
        window.onclick = function(event) {
  if (event.target == lightbox) {
    document.querySelector('#lightbox').classList.remove('show');
  }
}
        
    });

});