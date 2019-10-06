import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from '../src/js/components/SideBar';

describe('サイドバーコンポーネント', () => {
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
