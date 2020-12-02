import React from 'react';
import { render, screen } from '@testing-library/react';
import BrokenComponent from './BrokenComponent'
test('render w/o crashing', ()=> {
  render(<BrokenComponent />);
})
