import { render, screen} from '@testing-library/react';
import App from './App';

test('render halaman home dengan benar', () => {
  render(<App />);

  const title = screen.getByText(/id labore ex et quam laborum/i);
  expect(title).toBeInTheDocument();

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
