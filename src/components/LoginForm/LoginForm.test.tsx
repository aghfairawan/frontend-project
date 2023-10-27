import React from 'react';
import { fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import LoginForm from '.';
import { BrowserRouter } from 'react-router-dom';


describe('test login form', () => {

    const mockProps = jest.fn();

    it('title render corectly', async () => {
        render(
            <BrowserRouter>

                <LoginForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Login Page')
        expect(title).toBeDefined();
    })

    it('label email render corectly', async () => {
        render(
            <BrowserRouter>

                <LoginForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('email')
        expect(title).toBeDefined();
    })

    it('label password render corectly', async () => {
        render(
            <BrowserRouter>

                <LoginForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    it('button submit render corectly', async () => {
        render(
            <BrowserRouter>

                <LoginForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    it('onSubmit work corectly', async () => {
        const { getByPlaceholderText, getByText } = render(
            <BrowserRouter>

                <LoginForm onSubmit={mockProps} />

            </BrowserRouter>
        );
        const emailInput = getByPlaceholderText('Enter Email');
        const passwordInput = getByPlaceholderText('Enter Password');
        const submitButton = getByText('Submit');

        fireEvent.change(emailInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'testpassword'}});
        fireEvent.click(submitButton);

        await waitFor(()=>{
            expect(mockProps).toHaveBeenCalledTimes(1);
            expect(mockProps).toHaveBeenCalledWith({
                email: 'testuser',
                password: 'testpassword'
            });
        });
        
    });
})