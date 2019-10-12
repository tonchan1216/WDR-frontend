import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../src/js/components/Content';
import Skill from '../src/js/components/Skill/Skill';
import SkillItem from '../src/js/components/Skill/SkillItem';

describe('スキルコンポーネント', () => {
  it('Contentレンダリング', () => {
    const skill = {
      front: ['A', 'B', 'C'],
      back: ['D', 'F', 'G']
    };
    const component = renderer.create(
      <Content skill={skill} page="front" news="news1" />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Skillレンダリング', () => {
    const skill = {
      front: ['A', 'B', 'C'],
      back: ['D', 'F', 'G']
    };
    const page = 'front';
    const component = renderer.create(<Skill page={page} skill={skill} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SkillItemレンダリング', () => {
    const name = 'test';
    const component = renderer.create(<SkillItem name={name} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
