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
        description: 'My experience was nothing short but amazing. The staff were warm, welcoming and alwasy ready to help. The romm was clean, stylish and incredibly comfortable. I expecially enjoyed the breakfast.' 

    },
    { image: 'https://iili.io/FOlBhtR.jpg',
        name: 'John Wick',
        description: 'My experience was nothing short but amazing. The staff were warm, welcoming and alwasy ready to help. The romm was clean, stylish and incredibly comfortable. I expecially enjoyed the breakfast.' 

    },
    { image: 'https://iili.io/FOlBhtR.jpg', 
        name: 'John Wick',
        description: 'My experience was nothing short but amazing. The staff were warm, welcoming and alwasy ready to help. The romm was clean, stylish and incredibly comfortable. I expecially enjoyed the breakfast.' 

    }
  ];

  const carouselInner = document.getElementById('carouselInner');

  images.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'carousel-item' + (index === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = `${item.image}`
    img.className = 'd-block'
    div.appendChild(img)

    // div.innerHTML = `
    // <div class="carousel-caption d-none d-md-block">
    //     <h5>${item.description}</h5>
    //     <h4>${item.name}</h4>
    //     </div>
    // `;

    carouselInner.appendChild(div);
  });