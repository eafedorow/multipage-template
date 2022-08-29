//Hover in trademark section
const items = document.querySelectorAll('.trademarks__list-item');

for (let item of items) {
  let itemTitle = item.querySelector('.trademarks__item-title');
  let itemImg = item.querySelector('.trademarks__item-img');
  item.onmouseenter = function() { 
    itemTitle.classList.add('active');
    itemImg.classList.add('active');
    item.classList.add('active');
  }
  item.onmouseleave = function() { 
    itemTitle.classList.remove('active');;
    itemImg.classList.remove('active');
    item.classList.remove('active');
  }
}

//Hover in trademark section
const fields = document.querySelectorAll('.fields__logo-item');

for (let item of items) {
  let logo = item.querySelector('.fields__item-img');
  item.onmouseenter = function() { 
    item.classList.add('active');
  }
  item.onmouseleave = function() { 
    item.classList.remove('active');
  }
}



