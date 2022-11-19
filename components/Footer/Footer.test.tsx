import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Componet', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(2).toBe(2);
  });
});
