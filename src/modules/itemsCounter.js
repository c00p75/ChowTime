// Add total movie count to navigation item
export const categoryCounter = () => {
  const count = document.querySelector('#meal-container').childElementCount;
  return count;
};

export default categoryCounter;
