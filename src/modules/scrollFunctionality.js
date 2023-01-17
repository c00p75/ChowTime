export const BtnDisplay = (category) => {
  setTimeout(() => {
    // If scroll left is 0, hide left scroll btn
    if (category.scrollLeft === 0) {
      category.parentElement.querySelector('.scroll-left').classList.add('hide');
    }

    // If scroll is at end, hide right scroll btn
    if (category.scrollWidth - category.scrollLeft - category.clientWidth < 1) {
      category.parentElement.querySelector('.scroll-right').classList.add('hide');
    }

    // If scroll left is not at 0, show left scroll btn
    if (category.scrollLeft !== 0) {
      category.parentElement.querySelector('.scroll-left').classList.remove('hide');
    }

    // If scroll is not at end, show right scroll btn
    if (category.scrollWidth - category.scrollLeft - category.clientWidth > 1) {
      category.parentElement.querySelector('.scroll-right').classList.remove('hide');
    }
  }, '500');
};

export const scrollRight = (btn) => {
  const category = btn.parentElement.querySelector('.category');
  const elementWidth = (parseFloat(window.getComputedStyle(category).width));
  category.scrollLeft += elementWidth;
  BtnDisplay(category);
};

export const scrollLeft = (btn) => {
  const category = btn.parentElement.querySelector('.category');
  const elementWidth = (parseFloat(window.getComputedStyle(category).width));
  category.scrollLeft += -elementWidth;
  BtnDisplay(category);
};
