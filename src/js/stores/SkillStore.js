import { observable, computed, action } from 'mobx';

export default class SkillStore {
  @observable news = '';

  @observable inputText = '';

  @observable page = 'front';

  @observable.shallow skill = {
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
  };

  @computed get getInputText() {
    return this.inputText;
  }

  @action.bound changeText(text) {
    this.inputText = text;
  }

  @action.bound updateNews(news) {
    this.news = news;
  }

  @action.bound addSkill() {
    if (this.inputText === '') return;
    this.skill[this.page] = this.skill[this.page].concat(this.inputText);
    this.inputText = '';
    // console.log(this.skill[this.page]);
  }

  @action.bound togglePage(page) {
    this.page = page;
  }
}
