import ChartConstructor from './graphs';
import Menu from './menu';
import Toggle from './offers';

window.addEventListener('load', () => {
  ChartConstructor.initialization();
  Menu();
  Toggle();
});
