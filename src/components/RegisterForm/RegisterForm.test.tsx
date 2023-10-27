import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegisterForm from '.';
import { BrowserRouter } from 'react-router-dom';

describe('test register form', () => {

    const mockProps = jest.fn();

    it('title render corectly', async () => {
        render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Register Page')
        expect(title).toBeDefined();
    })

    it('label email render corectly', async () => {
        render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Email')
        expect(title).toBeDefined();
    })

    it('label name render corectly', async () => {
        render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('name')
        expect(title).toBeDefined();
    })

    it('label Pasword render corectly', async () => {
        render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    it('button submit render corectly', async () => {
        render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    it('onSubmit work corectly', async () => {
        const { getByPlaceholderText, getByText } = render(
            <BrowserRouter>

                <RegisterForm onSubmit={mockProps} />

            </BrowserRouter>
        )
        const emailInput = screen.getByPlaceholderText('Enter Email');
        const nameInput = screen.getByPlaceholderText('Enter Name');
        const passwordInput = screen.getByPlaceholderText('Enter Password');
        const submitButton = getByText('Submit');

        fireEvent.change(emailInput, {target: {value: 'testuser'}});
        fireEvent.change(nameInput, {target: {value: 'testname'}});
        fireEvent.change(passwordInput, {target: {value: 'testpassword'}});
        fireEvent.click(submitButton);

        await waitFor(()=>{
            expect(mockProps).toHaveBeenCalledTimes(1);
            expect(mockProps).toHaveBeenCalledWith({
                email: 'testuser',
                name: 'testname',
                password: 'testpassword'
            });
        });
        
    })

})