import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Pokemon Game', async () => {
  render(<App />);
  const Heading = await screen.findAllByAltText(/Pokemon Game/);
  expect(Heading).toBeInTheDocument();
});
