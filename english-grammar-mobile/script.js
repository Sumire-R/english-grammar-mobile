const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-button');

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'メニューを開く';
}

menuButton.addEventListener('click', () => {
  const opening = !nav.classList.contains('open');
  nav.classList.toggle('open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.querySelector('.sr-only').textContent = opening ? 'メニューを閉じる' : 'メニューを開く';
});

nav.addEventListener('click', closeMenu);

document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.alt;
    document.body.classList.add('modal-open');
    dialog.showModal();
  });
});

function closeLightbox() {
  dialog.close();
  document.body.classList.remove('modal-open');
  dialogImage.src = '';
}

closeButton.addEventListener('click', closeLightbox);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeLightbox();
});
dialog.addEventListener('cancel', () => document.body.classList.remove('modal-open'));
