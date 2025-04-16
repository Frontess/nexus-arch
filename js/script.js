document.addEventListener("DOMContentLoaded", function () {
  const siteHeader = document.getElementById("siteHeader"); // Получаем элемент шапки сайта
  const burgerMenu = document.getElementById("burgerMenu"); // Получаем элемент бургер-меню
  const mainNav = document.querySelector(".main-nav"); // Находим навигацию по классу

  // 1. Изменение фона шапки при прокрутке страницы
  if (siteHeader) {
    window.addEventListener("scroll", function () {
      // Если пользователь прокручивает страницу более чем на 50px, добавляем класс 'scrolled'
      if (window.scrollY > 50) {
        siteHeader.classList.add("scrolled");
      } else {
        // Убираем класс 'scrolled', если прокрутка меньше 50px
        siteHeader.classList.remove("scrolled");
      }
    });
  }

  // 2. Управление бургер-меню для мобильных устройств
  if (burgerMenu && mainNav) {
    burgerMenu.addEventListener("click", function () {
      // Переключаем класс 'active' для иконки бургер-меню
      burgerMenu.classList.toggle("active");
      // Переключаем класс 'active' для навигации, чтобы показать или скрыть её
      mainNav.classList.toggle("active");
    });

    // Дополнительно: Закрытие меню при клике на ссылку
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("active")) {
          // Убираем класс 'active' у бургер-меню и навигации
          burgerMenu.classList.remove("active");
          mainNav.classList.remove("active");
        }
      });
    });
  }
});
