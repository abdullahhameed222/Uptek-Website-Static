document.addEventListener('DOMContentLoaded', function() {
  const testimonialSlider = document.querySelector('.testimonial__slider');
  console.log(testimonialSlider)
  const testimonialSlides = document.querySelectorAll('.testimonial__slider .swiper-slide');
  console.log(testimonialSlides)
  
  if ( testimonialSlider ) {
    new Swiper('.testimonial__slider', {
    loop: true,
    navigation: {
      nextEl: '.testimonial__wrapper .swiper-button-next',
      prevEl: '.testimonial__wrapper .swiper-button-prev',
    },
  });
}

if ( testimonialSlides ) {
  testimonialSlides.forEach( ( item ) => {
    item.addEventListener('mouseover', () => {
      let testimonialProject = item.querySelector('.testimonial__project');
      if ( !testimonialProject ) return;
      item.addEventListener('mousemove', (e) => {
        testimonialProject.style.left = e.clientX / 2 + 'px';
        testimonialProject.style.top = e.clientY / 5 + 'px';
      });
    });
  })
}
});
