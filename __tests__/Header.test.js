import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/js/components/Header/Header';
import TopBar from '../src/js/components/Header/TopBar';

describe('ヘッダーコンポーネント', () => {
  it('TopBarレンダリング', () => {
    const page = 'back';
    const mockTogglePage = jest.fn();
    const component = renderer.create(
      <TopBar
        page="front"
        name="フロントエンド"
        status={page === 'front' ? 'active' : 'inactive'}
        togglePage={mockTogglePage}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Headerレンダリング', () => {
    const page = 'front';
    const mockTogglePage = jest.fn();
    const component = renderer.create(
      <Header
        page="front"
        name="フロントエンド"
        status={page === 'front' ? 'active' : 'inactive'}
        togglePage={mockTogglePage}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
