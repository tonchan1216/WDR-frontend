import React from 'react';
import { connect } from 'react-redux';
import { addSkill, togglePage, updateNews, changeText } from './actions';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../sass/main.scss';

import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
  componentDidMount() {
    const { dispatchUpdateNews } = this.props;
    const url = 'assets/tenki.json';
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text);
        const jsonForecasts = json.forecasts[0];
        dispatchUpdateNews(`${jsonForecasts.date}：${jsonForecasts.telop}`);
      });
  }

  render() {
    const {
      dispatchAddSkill,
      dispatchtogglePage,
      dispatchChangeText,
      skill,
      page,
      news,
      inputText
    } = this.props;
    return (
      <div className="container">
        <Header togglePage={dispatchtogglePage} page={page} />
        <Content
          skill={skill}
          page={page}
          news={news}
          inputText={inputText}
          addSkill={dispatchAddSkill}
          changeText={dispatchChangeText}
        />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({
    skill: state.skill,
    page: state.page,
    news: state.news,
    inputText: state.inputText
  }),
  dispatch => ({
    dispatchUpdateNews: news => dispatch(updateNews(news)),
    dispatchAddSkill: text => dispatch(addSkill(text)),
    dispatchtogglePage: page => dispatch(togglePage(page)),
    dispatchChangeText: text => dispatch(changeText(text))
  })
)(App);
