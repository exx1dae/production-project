import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Buttons', () => {
  test('Default button with text', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button with custom theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Some text</Button>);
    expect(screen.getByText('Some text')).toHaveClass('clear');
    screen.debug();
  });
});
