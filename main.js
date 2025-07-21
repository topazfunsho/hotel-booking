// desktop functions 


// mobile functions 
let menuBtn = document.getElementById('menu');
let mobileNav = document.getElementById('mobile-nav');
let closeBtn = document.getElementById('close')

menuBtn.addEventListener('click', function(){
    mobileNav.style.display = 'block';
})
closeBtn.addEventListener('click', function(){
    mobileNav.style.display = 'none';
})