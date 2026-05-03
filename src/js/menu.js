(() => {
  // Находим элементы (замените селекторы в кавычках на ваши классы)
  const refs = {
    openMenuBtn: document.querySelector('.burger-btn'), // Кнопка открытия
    closeMenuBtn: document.querySelector('.menu-close-button'), // Кнопка закрытия
    menu: document.querySelector('.mob-menu'), // Само меню
    menuLinks: document.querySelectorAll('.menu-nav-link'), // Ссылки в меню
    logo: document.querySelector('.menu-logo'), // Логотип в хедере
  };

  // Функция переключения класса is-open
  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    // Блокируем скролл основной страницы, когда меню открыто
    document.body.classList.toggle('no-scroll');
  };

  // Функция принудительного закрытия
  const closeMenu = () => {
    refs.menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };

  // Слушатели событий
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрытие при клике на логотип
  if (refs.logo) {
    refs.logo.addEventListener('click', closeMenu);
  }

  // Закрытие при клике на любую ссылку в меню
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();
