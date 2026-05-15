'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  const links = overlay.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  });


  const qnaItems = document.querySelectorAll('#QandA dl');

  qnaItems.forEach(item => {
    item.addEventListener('click', () => {

      const isOpen = item.classList.contains('appear');

      qnaItems.forEach(el => {
        el.classList.remove('appear');
      });

      if (!isOpen) {
        item.classList.add('appear');
      }
    });
  });


}
