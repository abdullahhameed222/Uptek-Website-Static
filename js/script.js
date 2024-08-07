
let hamburgerEl =document.querySelector(".hamburger")
let navEl=document.querySelector(".main-menu")

hamburgerEl.addEventListener('click', () => {
  const isActive = hamburgerEl.classList.toggle('is-active');
  navEl.classList.toggle('main-menu-open', isActive);

  if (isActive) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});

