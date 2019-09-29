import React from 'react';

import SideBar from './sideBar';
import Skill from './Skill/skill';

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        news: '',
        inputText: ''
      },
      items: {
        front: [
          'HTML',
          'CSS',
          'Basic of JavaScript',
          'Package Managers',
          'CSS Pre-proccessors',
          'CSS Frameworks',
          'CSS Architecture',
          'Build Tootls',
          'Pick a Framework',
          'CSS in JS',
          'Testing your Apps',
          'Progressive Web Apps',
          'Type Checkers',
          'Server Side Rendering',
          'Static Site Generators',
          'Desktop Applications',
          'Mobile Applications',
          'Web Assembly'
        ],
        back: []
      }
    };
    this.addSkill = this.addSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { data } = this.state;

    const url = 'assets/tenki.json';
    fetch(url)
      .then(response => response.text())
      .then(text => {
        const json = JSON.parse(text);
        const jsonForecasts = json.forecasts[0];
        data.news = `${jsonForecasts.date}：${jsonForecasts.telop}`;
        this.setState({
          data
        });
      });
  }

  handleChange(event) {
    const { data } = this.state;

    // eventが発火したname属性名ごとに値を処理
    data.inputText = event.target.value;
    this.setState({
      data
    });
  }

  addSkill() {
    const { data, items } = this.state;
    const { inputText } = data;
    const { status } = this.props;
    const activeItems = status.front === 'active' ? items.front : items.back;
    if (inputText === '') return;
    data.inputText = '';
    activeItems.push(inputText);

    this.setState({
      data,
      items:
        status.front === 'active'
          ? { front: activeItems, back: items.back }
          : { front: items.front, back: activeItems }
    });
  }

  render() {
    const { items, data } = this.state;
    const { status } = this.props;
    return (
      <section className="main row">
        <Skill items={items} status={status} />
        <SideBar
          addSkill={this.addSkill}
          handleChange={this.handleChange}
          data={data}
        />
      </section>
    );
  }
}
