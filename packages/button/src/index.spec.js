import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '.';

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button>{'test'}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})