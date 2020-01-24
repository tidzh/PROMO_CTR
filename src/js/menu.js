const Menu = () => {
  const menu = document.querySelector('.navigation');
  const burger = document.querySelector('#burger');
  burger.addEventListener('click', () => {
    menu.classList.toggle('navigation_active');
    burger.classList.toggle('open');
  });
};
export default Menu;
