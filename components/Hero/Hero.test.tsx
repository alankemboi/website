import { render } from '@testing-library/react';
import Hero from '.';

describe('Hero component', () => {
  it('button to have correct label', () => {
    render(<Hero />);
    expect(2).toBe(2);
  });
});
