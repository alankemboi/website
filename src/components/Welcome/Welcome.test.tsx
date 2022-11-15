import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Linkedin link', () => {
     render(<Welcome />);
    expect(screen.getByText('Linkedin')).toHaveAttribute(
      'href',
      'https://linkedin.com/in/alan-kemboi-c'
    );
  });
});
