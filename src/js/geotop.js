const GeoTop = () => {
  const trigger = document.querySelector('.link_geotop');
  const wrap = document.querySelectorAll('.geo-top-wrap .d-none');
  if (trigger) {
    trigger.addEventListener('click', () => {
      wrap.forEach(item => {
        item.classList.add('geo-top__list_active');
      });
    });
  }
};
export default GeoTop;
