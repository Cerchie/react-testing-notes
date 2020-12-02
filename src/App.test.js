import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'
test('render w/o crashing', ()=> {
  render(<App />);
})

