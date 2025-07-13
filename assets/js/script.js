
const toggleButton = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("nav__menu--active");
});







//

document.querySelectorAll('.menu__link').forEach(button => {
  button.addEventListener('click', () => {
    const modalName = button.getAttribute('data-modal');
    const modal = document.querySelector(`.modal[data-modal="${modalName}"]`);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Cerrar al hacer clic en el botón de cierre
document.querySelectorAll('.modal__close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.querySelectorAll('.card__button').forEach(button => {
  button.addEventListener('click', () => {
    const modalName = button.getAttribute('data-modal');
    const modal = document.querySelector(`.modal[data-modal="${modalName}"]`);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Cerrar al hacer clic en el botón de cierre
document.querySelectorAll('.modal__close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});



const filtros = document.querySelectorAll('.catalogue__text');

filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    const categoria = filtro.getAttribute('data-category');

    // 1. Encuentra la sección a la que pertenece este filtro
    const seccion = filtro.closest('.catalogue');

    // 2. Busca todas las tarjetas dentro de ESA sección
    const cards = seccion.querySelectorAll('.card__container');

    // 3. Muestra/oculta según la categoría
    cards.forEach(card => {
      if (card.getAttribute('data-category') === categoria) {
        card.style.display = 'flex'; // o 'block' según diseño
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Botones "Ver todos" para mostrar todo
const botonesVerTodos = document.querySelectorAll('[data-role="ver-todos"]');

botonesVerTodos.forEach(boton => {
  boton.addEventListener('click', () => {
    const seccion = boton.closest('.catalogue');
    const cards = seccion.querySelectorAll('.card__container');

    cards.forEach(card => {
      card.style.display = 'flex'; // o 'block', según tu diseño
    });
  });
});