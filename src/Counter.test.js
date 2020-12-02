import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter'
test('render w/o crashing', ()=> {
  render(<Counter />);
})

test('btn iincrements counter', () => {
   const {getByText, debug} = render(<Counter/>);
   debug();
   const h2 = getByText('Current count: 0')
   const btn = getByText('Add')
   fireEvent.click(btn);
   expect(h2).toHaveTextContent('1');
 
});