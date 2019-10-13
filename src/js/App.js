/* eslint-disable class-methods-use-this */
import React from 'react';
import { observer, inject } from 'mobx-react';
import Header from './components/Header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

@inject('store')
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchJson = this.fetchJson.bind(this);
  }

  async componentDidMount() {
    const { store } = this.props;
    const news = await this.fetchJson();
    store.updateNews(news);
  }

  async fetchJson() {
    const url = 'assets/tenki.json';
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text);
        const jsonForecasts = json.forecasts[0];
        return `${jsonForecasts.date}：${jsonForecasts.telop}`;
      });
  }

  render() {
    const { store } = this.props;
    return (
      <div className="container">
        <Header togglePage={store.togglePage} page={store.page} />
        <Content
          skill={store.skill}
          page={store.page}
          news={store.news}
          inputText={store.inputText}
          addSkill={store.addSkill}
          changeText={store.changeText}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
