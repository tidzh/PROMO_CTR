import ChartConstructor from './graphs';
import Menu from './menu';
import Toggle from './offers';
import GeoTop from './geotop';
import Aprovtop from './aprovtop';

window.addEventListener('load', () => {
  ChartConstructor.initialization();
  Menu();
  Toggle();
  GeoTop();
});
