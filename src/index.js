/* eslint-disable global-require */
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { defaultColor, themeColorStorageKey } from './constants/defaultValues';

const color = defaultColor;

localStorage.setItem(themeColorStorageKey, color);

const render = () => {
  import(`./assets/css/sass/main.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();
