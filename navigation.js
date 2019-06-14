window.addEventListener('load', function(){
    const button = document.querySelector('#nav-button');
    const nav = document.querySelector('.navigation');
    
    button.addEventListener('click', function(){
        if(nav.classList.contains('open')){
            nav.classList.remove('open');            
        }
        else{
       nav.classList.add('open'); 
        }
    });
});