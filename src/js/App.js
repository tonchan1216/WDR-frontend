/* eslint-disable object-curly-newline */
import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addSkill, togglePage } from './actions';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../sass/main.scss';

import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = ({ dispatchAddSkill, dispatchtogglePage, skill, status }) => (
  <div className="container">
    <Header togglePages={dispatchtogglePage} status={status} />
    <Content skill={skill} status={status} addSkill={dispatchAddSkill} />
    <Footer />
  </div>
);

export default connect(
  state => ({ skill: state.skill, status: state.status }),
  dispatch => ({
    dispatchAddSkill: text => dispatch(addSkill(text)),
    dispatchtogglePage: status => dispatch(togglePage(status))
  })
)(App);
