(() => {
  const refs = {
    openMenuBtn: document.querySelector('.burger-btn'),
    closeMenuBtn: document.querySelector('.menu-close-button'),
    menu: document.querySelector('.mob-menu'),
    menuLinks: document.querySelectorAll('.menu-nav-link, .menu-btn'),
    logo: document.querySelector('.menu-logo'),
  };

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    refs.menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  if (refs.logo) {
    refs.logo.addEventListener('click', closeMenu);
  }

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();
