import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { ContextControler } from './context/StateContext';

const setup = () => {
  render(
    <ContextControler>
      <App />
    </ContextControler>
  );
};

afterEach(cleanup);

describe('Before fetch data', () => {
  test('should be image on header', () => {
    setup();
    const headerImg = screen.getByAltText(/img/i);
    expect(headerImg).toBeInTheDocument();
  });
  test('should be spinner on start', () => {
    setup();
    const spinner = screen.getByAltText(/spinner/i);
    expect(spinner).toBeInTheDocument();
  });
  test('should be pagination 1 on begginnig', () => {
    setup();
    const pagginationOne = screen.getByRole('button', { name: /1/i });
    expect(pagginationOne).toBeInTheDocument();
  });
});

describe('After fetch data', () => {
  test('should be images', async () => {
    setup();
    const faceImg = await screen.findAllByText(/Walter White/i);
    expect(faceImg).toHaveLength(2);
    // screen.debug(faceImg);
  });
});
