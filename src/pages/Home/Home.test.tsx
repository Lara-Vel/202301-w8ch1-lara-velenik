import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home/Home';

describe('Given a home page', () => {
  test('When is rendered, then the page must be in the document', () => {
    render(
      <MemoryRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Home />
          </Provider>
        </React.StrictMode>
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });
});
