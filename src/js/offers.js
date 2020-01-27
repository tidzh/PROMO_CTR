const Toggle = () => {
  const allOffers = document.querySelectorAll('.offers-list__list');
  allOffers.forEach(item => {
    item.addEventListener('click', function() {
      const toggleField = this.querySelectorAll('.offers-list__list-row');
      toggleField.forEach(item2 => {
        item2.classList.toggle('offers-list__list-row_active');
      });
    });
  });
};
export default Toggle;
