import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import userEvent from '@testing-library/user-event';


describe('Header', () => {
  it('submits the form with valid inputs', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const loginButton = screen.getByText('Login');
    await user.click(loginButton);
    const buttonSubmit = screen.getByTestId('submitBtn');

    const emailInput = screen.getByTestId('emailField');
    const passwordInput = screen.getByTestId('passwordField');

    await user.type(emailInput, "new value");
    await user.click(passwordInput);

    const emailError = screen.getByTestId('emailError');

    expect(emailError).toBeInTheDocument();

    await user.type(passwordInput, "n");
    await user.click(emailInput);

    const passwordError = screen.getByTestId('passwordError');
    expect(passwordError).toBeInTheDocument();

    await user.type(passwordInput, "goodpd");
    await user.type(emailInput, "gool@gmail.com");

    await user.click(passwordInput);
    await user.click(emailInput);

    expect(buttonSubmit.getAttribute("disabled")).toBe("");

  });
});