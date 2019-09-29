import _ from 'lodash';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import { fetchApi } from './fetch.js';
import { addSkill } from './skill.js';
import '../sass/main.scss';

document.querySelectorAll('.top-bar__link').forEach(link => {
  link.addEventListener(
    'click',
    event => {
      event.preventDefault();
      alert('Sorry, under construction');
    },
    false
  );
});

document.querySelector('.add-skill__button').addEventListener(
  'click',
  event => {
    event.preventDefault();
    addSkill();
  },
  false
);

fetchApi();
