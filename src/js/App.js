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
    const { dispatchtogglePage } = this.props;
    //   const url = 'assets/tenki.json';
    //   fetch(url)
    //     .then(response => response.text())
    //     .then(text => {
    //       const json = JSON.parse(text);
    //       const jsonForecasts = json.forecasts[0];
    //       dispatchtogglePage(`${jsonForecasts.date}：${jsonForecasts.telop}`);
    //       console.log(json);
    //     });
  }

  render() {
    const {
      dispatchAddSkill,
      dispatchtogglePage,
      dispatchChangeText,
      skill,
      page,
      input_text
    } = this.props;
    return (
      <div className="container">
        <Header togglePage={dispatchtogglePage} page={page} />
        <Content
          skill={skill}
          page={page}
          input_text={input_text}
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
    input_text: state.input_text
  }),
  dispatch => ({
    dispatchUpdateNews: news => dispatch(updateNews(news)),
    dispatchAddSkill: text => dispatch(addSkill(text)),
    dispatchtogglePage: page => dispatch(togglePage(page)),
    dispatchChangeText: text => dispatch(changeText(text))
  })
)(App);
