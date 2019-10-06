import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../src/js/components/Footer';

describe('フッターコンポーネント', () => {
  it('Footerレンダリング', () => {
    const component = renderer.create(<Footer />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
