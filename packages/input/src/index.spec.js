import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '.';

describe('Input', () => {
  test('renderer correctly', () => {
    const tree = renderer.create(<Input/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})