import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryList from '.';
import { ColumnsType } from 'antd/es/table';
import { category } from 'src/types';

const columns: ColumnsType<category> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'author',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
    }
    
];

describe('Test Category List', ()=>{
    beforeAll(()=>{
        Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });})
    test('test header colum', ()=>{
        render(<CategoryList columns={columns} data={[]}/>)

        columns.map((column)=>{
            if(column.title){
                const title =  screen.getByText(column.title.toString());

                expect(title).toBeDefined()
            }
        })
    })
})