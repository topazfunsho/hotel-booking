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





// courosel section 
const images = [
    { image: 'https://iili.io/FOlBhtR.jpg',
        name: 'John Wick',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quas explicabo maiores, fugit necessitatibus sit corrupti distinctio est perferendis corporis odio. Odit omnis voluptate nesciunt deleniti eveniet placeat nobis sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 

    },
    { image: 'https://iili.io/FOlBhtR.jpg',
        name: 'Susan Claw',
        description: 'My experience was nothing short but amazing. The staff were warm, welcoming and alwasy ready to help. The romm was clean, stylish and incredibly comfortable. I expecially enjoyed the breakfast.' 

    },
    { image: 'https://iili.io/FOlBhtR.jpg', 
        name: 'Topaz Funsho ',
        description: 'My experience was nothing short but amazing. The staff were warm, welcoming and alwasy ready to help. The romm was clean, stylish and incredibly comfortable. I expecially enjoyed the breakfast.' 

    }
  ];

  const carouselInner = document.getElementById('carouselInner');

  images.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'carousel-item' + (index === 0 ? ' active' : '');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    p.innerText = `${item.description}`
    p.style.maxWidth = '800px'
    p.style.justifySelf = 'center'
    p.style.textAlign = 'center'
    img.src = `${item.image}`
    img.style.justifySelf = 'center'
    img.classList.add('d-block')
    img.classList.add('mt-5')
    img.style.borderRadius = '100%'
    img.style.width = '80px'
    h3.innerText = `${item.name}`
    h3.style.justifySelf = 'center'
    h3.classList.add('mt-4')
    div.appendChild(p)
    div.appendChild(img)
    div.appendChild(h3)


    carouselInner.appendChild(div);
  });