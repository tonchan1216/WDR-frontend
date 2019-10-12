import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Provider } from 'mobx-react';
import App from '../src/js/App';
import SkillStore from '../src/js/stores/SkillStore';
import Content from '../src/js/components/Content';
import Header from '../src/js/components/Header/Header';
import Footer from '../src/js/components/Footer';

describe('SkillStore', () => {
  it('Change input text', () => {
    const store = new SkillStore();
    store.changeText('skill 1');
    expect(store.inputText).toBe('skill 1');
  });
  it('Update text', () => {
    const store = new SkillStore();
    store.updateNews('news 1');
    expect(store.news).toBe('news 1');
  });
  it('Add skills', () => {
    const store = new SkillStore();
    store.inputText = 'skill 2';
    store.page = 'front';
    store.addSkill();
    expect(store.skill.front[store.skill.front.length - 1]).toBe('skill 2');
  });
  it('Add skills - no input', () => {
    const store = new SkillStore();
    const slillNum = store.skill.front.length;
    store.inputText = '';
    store.page = 'front';
    store.addSkill();
    expect(store.skill.front).toHaveLength(slillNum);
  });
  it('Toggle page', () => {
    const store = new SkillStore();
    store.togglePage('back');
    expect(store.page).toBe('back');
  });
});

describe('App component', () => {
  it('Appレンダリング', () => {
    const store = new SkillStore();
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('App 子コンポーネント', () => {
    const store = new SkillStore();
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('Fetch API when Mounted', () => {
    const spy = jest.spyOn(global, 'fetch');
    const store = new SkillStore();
    shallow(<App store={store} />);
    expect(spy).toHaveBeenCalled();
  });
});
