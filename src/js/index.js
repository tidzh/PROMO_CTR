import ChartConstructor from './graphs';
import Menu from './menu';
import Toggle from './offers';
import GeoTop from './geotop';

window.addEventListener('load', () => {
  ChartConstructor.initialization();
  Menu();
  Toggle();
  GeoTop();
});
