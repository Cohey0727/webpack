import _ from 'lodash';
import './style-css.css';
import './style-scss.scss'
import logo from './images/logo.png';


function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!'];
  element.innerHTML = _.join(array, '! ');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('main');

const image = new Image();
image.src = logo;
document.body.appendChild(image);
