import { observable, action } from 'mobx';
import { _Skill } from '../Types';

export default class SkillStore {
  @observable news: string = '';

  @observable inputText: string = '';

  @observable page: string = 'front';

  @observable.shallow skill: _Skill = {
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

  @action.bound changeText(text: string) {
    this.inputText = text;
  }

  @action.bound updateNews(news: string) {
    this.news = news;
  }

  @action.bound addSkill() {
    if (this.inputText === '') return;
    const page: string = this.page;
    this.skill[page] = this.skill[page].concat(this.inputText);
    this.inputText = '';
  }

  @action.bound togglePage(page: string) {
    this.page = page;
  }
}
