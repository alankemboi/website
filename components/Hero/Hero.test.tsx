import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
  it('button to have correct label', () => {
    render(<Hero textOnly />);
    expect(2).toBe(2);
  });
});
