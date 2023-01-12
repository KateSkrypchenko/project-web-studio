import { refs } from './refs.js';

refs.btnList.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }
  const currentCategory = event.target.dataset.filter;

  onFilter(currentCategory, refs.cardList);
}

function onFilter(category, items) {
  console.log(items);
  items.forEach(item => {
    const isCurrentItem = !item.classList.contains(category);
    const isShowAll = category === 'filter-all-js';
    if (isCurrentItem && !isShowAll) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
}
