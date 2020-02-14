import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import 'mutationobserver-shim'
import App from './App';
import Player from './components/Players'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//Testing Text Element

test("Render Text", () => {
  const { getByText } = render(<App />);
  const h1El = getByText(/Women's World Cup Soccer/i)
  // expect(h1El).toBeInTheDocument()
  expect(h1El).toBeTruthy();
  expect(h1El).not.toBeFalsy();
})

//Testing Button Element

test('Render Button', () => {
  const {getByTestId} = render(<App/>)
  const btn = getByTestId('dark-btn')
  // expect(btn).toHaveAttribute('onClick', 'toggleDarkMode' )
})


//Testing Img Element
test('Render Img', () => {
  const { getByAltText } = render(<App />);
  const trophyImg = getByAltText(/trophy/i);
  // expect(trophy).toBeInTheDocument();
  // expect(trophy).toBeVisible();
})


//Testing Link Element
test('Render Links', () => {
  const { getByText } = render(<App />);
  const link = getByText(/learn react/i);
  // expect(link).toBeInTheDocument();
  // expect(link).toBeVisible();
})
