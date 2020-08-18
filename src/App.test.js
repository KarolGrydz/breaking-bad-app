import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';
import { ContextControler } from './context/StateContext';

beforeEach(() => {
  render(
    <ContextControler>
      <App />
    </ContextControler>
  );
});

afterEach(cleanup);

describe('Before fetch data', () => {
  test('should be image on header', () => {
    const headerImg = screen.getByAltText(/img/i);
    expect(headerImg).toBeInTheDocument();
  });
  test('should be spinner on start', () => {
    const spinner = screen.getByAltText(/spinner/i);
    expect(spinner).toBeInTheDocument();
  });
  test('should be pagination 1 on begginnig', () => {
    const pagginationOne = screen.getByRole('button', { name: /1/i });
    expect(pagginationOne).toBeInTheDocument();
  });
});

describe('After fetch data', () => {
  test('should be images', async () => {
    const faceImg = await screen.findAllByText(/Walter White/i);
    expect(faceImg).toHaveLength(2);
  });
  test('should be modal on click', async () => {
    const faceImg = await screen.findByTestId('Jesse Pinkman-card');
    userEvent.click(faceImg);
    const modalOccupation = await screen.findByText(/Funyuns are awesome./i);
    expect(modalOccupation).toBeInTheDocument();
  });
  test('close modal after click', async () => {
    const faceImg = await screen.findByTestId('Walter White-card');
    const pagginationTwo = screen.getByRole('button', { name: /2/i });
    userEvent.click(faceImg);
    userEvent.click(pagginationTwo);
    expect(screen.queryByRole('presentation')).toBeNull();
  });
  test('should input work', async () => {
    const input = screen.getByPlaceholderText(/Search for character/i);
    await act(async () => {
      userEvent.type(input, 'emilio');
    });
    const emilio = await screen.findByText(/Emilio Koyama/i);
    expect(emilio).toBeInTheDocument();
  });
});
