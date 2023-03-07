import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('Given a main layout', () => {
  test('When is rendered, then header and outlet must be in the document', () => {
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    );
    const titleElement = screen.getByText('app-container');
    expect(titleElement).toBeInTheDocument();
  });
});
