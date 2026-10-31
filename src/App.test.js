import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading and QA resume button', () => {
  render(<App />);
  const heroElement = screen.getByText(/Peter Joshua E. Deloria/i);
  expect(heroElement).toBeInTheDocument();

  const resumeButtons = screen.getAllByText(/QA Resume/i);
  expect(resumeButtons.length).toBeGreaterThan(0);
});
