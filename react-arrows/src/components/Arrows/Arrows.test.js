import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Arrows from './Arrows';

describe('<Arrows />', () => {
  test('it should mount', () => {
    render(<Arrows />);
    
    const arrows = screen.getByTestId('Arrows');

    expect(arrows).toBeInTheDocument();
  });
});