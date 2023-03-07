import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Given a header component', () => {
  test('When header is rendered, then it should show the component', () => {
    render(<Header />, { wrapper: MemoryRouter });
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
