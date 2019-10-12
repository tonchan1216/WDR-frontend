import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Header from '../src/js/components/Header/Header';
import TopBar from '../src/js/components/Header/TopBar';

describe('ヘッダーコンポーネント', () => {
  describe('レンダリング', () => {
    it('TopBarレンダリング', () => {
      const component = renderer.create(
        <TopBar page="front" name="フロントエンド" />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Headerレンダリング', () => {
      const component = renderer.create(<Header page="front" />);

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('イベント', () => {
    it('TopBarクリック', () => {
      const mockTogglePage = jest.fn();
      const wrapper = mount(<TopBar togglePage={mockTogglePage} />);
      wrapper.find('button').simulate('click');
      expect(mockTogglePage).toHaveBeenCalled();
    });
  });
});
