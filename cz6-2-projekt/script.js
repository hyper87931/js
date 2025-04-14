'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // jesli zdefinijumey funkcjie czyli (e) to w tym momencie bedzie pojawiac nam sie jaki klawisz klikamy
  console.log(e.key);

  if (e.key === 'Escape') {
    if(!modal.classList.contains('hidden')){  // jezeli modal nie zawiera w sobie klasy hidden wywolaj funkcje closemodal ! = odwrocenie wiec jesli mam tak to z ! bedzie nie
        closeModal();
    }
  }
});
