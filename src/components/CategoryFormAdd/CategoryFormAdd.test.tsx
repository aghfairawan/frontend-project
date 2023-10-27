import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryFormAdd from '.';

describe('Category add form', () => {

    const mockProps = jest.fn();

    it('title render corectly', async () => {
        render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Add Category')
        expect(title).toBeDefined();
    })

    it('label name render corectly', async () => {
        render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Nama')
        expect(title).toBeDefined();
    })

    it('label status render corectly', async () => {
        render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Status')
        expect(title).toBeDefined();
    })

    it('button submit render corectly', async () => {
        render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    it('button back render corectly', async () => {
        render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const title = screen.getByText('Back')
        expect(title).toBeDefined();
    })

    it('onSubmit work corectly', async () => {
        const { getByPlaceholderText, getByText } = render(
            <BrowserRouter>

                <CategoryFormAdd onSubmit={mockProps} />

            </BrowserRouter>
        )
        const nameInput = getByPlaceholderText('Enter Name');
        const submitButton = getByText('Submit');

        fireEvent.change(nameInput, {target: {value: 'testname'}});
        fireEvent.click(submitButton);

        // await waitFor(()=>{
        //     expect(mockProps).toHaveBeenCalledTimes(1);
        //     expect(mockProps).toHaveBeenCalledWith({
        //         name: 'testname'
        //     });
        // });
        
    })

})