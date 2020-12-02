import React from 'react';
import { render, screen } from '@testing-library/react';
import FixedComponent from './FixedComponent'
it('renders w/o crashing', ()=> {
  render(<FixedComponent />);
})

it('matches snapshot', function(){
    const {asFragment} = render(<FixedComponent/>);
    expect(asFragment()).toMatchSnapshot()
});