import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SideBar from '../src/js/components/SideBar';

describe('サイドバーコンポーネント', () => {
  describe('レンダリング', () => {
    it('SideBarレンダリング', () => {
      const news = 'test-news';
      const inputText = 'some input text';

      const component = renderer.create(
        <SideBar news={news} inputText={inputText} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('イベント', () => {
    it('SideBarクリック', () => {
      const mockAddSkill = jest.fn();
      const wrapper = mount(<SideBar addSkill={mockAddSkill} />);
      wrapper.find('.add-skill__button').simulate('click');
      expect(mockAddSkill).toHaveBeenCalled();
    });
    it('SideBarテキストボックス', () => {
      const mockChangeText = jest.fn();
      const wrapper = mount(<SideBar changeText={mockChangeText} />);
      wrapper
        .find('.add-skill__textbox')
        .simulate('change', { target: { value: 'My new value' } });
      expect(mockChangeText).toHaveBeenCalled();
    });
  });
});
