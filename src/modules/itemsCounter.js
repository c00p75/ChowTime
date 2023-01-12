// Add total movie count to navigation item
export const categoryCounter = () => {
  const count = document.querySelector('#meal-container').childElementCount;
  return count;
};

export const itemCounter = () => {
  let count = 0;
  document.querySelector('#meal-container').childNodes.forEach((i) => {
    i.childNodes.forEach(() => { count += 1; });
  });
  console.log(count);
};
