import { refs } from './refs.js';

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.body.classList.toggle('modal-open');
  refs.modal.classList.toggle('is-hidden');
}
