let prev = document.querySelector('.prev-arrow');
let next = document.querySelector('.next-arrow');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let width = slides[0].getBoundingClientRect().width;

window.addEventListener('resize', () => {
  width = slides[0].getBoundingClientRect().width;
});

let index = 0;

slider.insertAdjacentHTML('afterbegin', slides[slides.length - 1].outerHTML);
slider.insertAdjacentHTML('beforeend', slides[0].outerHTML);
slider.style.transform = `translateX(-${width}px)`;

// Dot

slides.forEach(() => {
  let dot = document.createElement('li');
  dot.classList.add('dot');
  document.querySelector('.slider__controler').appendChild(dot);
})
let dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

// Refactor

function SlideMove (i) {
  if (i) {
    slider.style.transform = `translateX(-${width * (i + 1)}px)`;
  } else {
    slider.style.transform = `translateX(-${width}px)`;
  }
}

function removeDot () {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
}

function activeDot(i) {
  dots[i].classList.add('active');
}

function slideTransition (yes) {
  if (yes) {
    slider.style.transition = 'transform 0.5s ease-in-out';
  } else {
    slider.style.transition = 'none';
  }
}

next.addEventListener('click', () => {
  index++;
  slideTransition("yes");
  SlideMove(index);
  removeDot();
  if (index > slides.length - 1) {
    setTimeout(() => {
      index = 0;
      SlideMove(index);
      slideTransition();
      activeDot(index);
    }, 500); 
  } else {
    activeDot(index);
  }
});

function nextTimeOut (next) {
  if(next.desabled) {
    return;
  }
  next.desabled = true;
  next.classList.add('desabled');
  setTimeout(() => {
    next.desabled= false;
    next.classList.remove('desabled');
  }, 1000);
}

prev.addEventListener('click', () => {
  index--;
  slideTransition("yes");
  SlideMove(index);
  removeDot();
  if (index < 0) {
    setTimeout(() => {
      index = slides.length -1;
      SlideMove(index);
      slideTransition();
      activeDot(index);
    }, 500);
  } else {
    activeDot(index);
  }
})

// Dot controlling

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    removeDot();
    index = i;
    dot.classList.add('active');
    slideTransition('yes');
    SlideMove(index);
  })
})











