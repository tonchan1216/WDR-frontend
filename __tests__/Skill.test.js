import React from 'react';
import renderer from 'react-test-renderer';
import Skill from '../src/js/components/Skill/Skill';
import SkillItem from '../src/js/components/Skill/SkillItem';

describe('スキルコンポーネント', () => {
  it('Skillレンダリング', () => {
    const skill = {
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
