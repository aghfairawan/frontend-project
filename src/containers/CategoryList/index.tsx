import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { CategoryList as CategoryListComponent } from '../../components'
import { category, GetCategoryResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

    const [categorys, setCategorys] = useState<category[]>([]);
    const navigate = useNavigate();


    const handleLogout = () => {
        
        localStorage.removeItem('token');
        navigate('/'); 
    };


    useEffect(
        () => {
            const token = localStorage.getItem('token');
            const getCategoryList = async () => {
                const fetching = await fetch('http://localhost:8000/books', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                const response: GetCategoryResponse = await fetching.json();
                setCategorys(response.data ?? []);
            }
            getCategoryList()
        },
        []
    )

    const removeCategory = async (_id: string) => {
        try {
            const token = localStorage.getItem('token');
            const fetching = await fetch(`http://localhost:8000/books/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            // const response = await fetching.json()

            if (fetching.ok) {

                setCategorys((categorys) => categorys.filter((category) => category._id !== _id))
            }
        } catch (error) {
            alert(error)
        }
    }

    const columns: ColumnsType<category> = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'Status',
            dataIndex: 'isDone',
            key: 'isDone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <Button type={'primary'} onClick={() => navigate(`/category/edit/${record._id!}`)}>Edit</Button>
                    <Button style={{ marginLeft: '10px' }} type={'primary'} color={'red'} onClick={() => removeCategory(record._id!)}>Delete</Button>
                </>
            ),
        },
    ];

    return (
        <>
            <h3>Task List</h3>
            <Button type={'primary'} onClick={() => navigate('/category/new')}>Add New Task</Button>
            <Button style={{ marginLeft: '700px' }} type="primary" onClick={handleLogout}>
                Logout
            </Button>
            <CategoryListComponent columns={columns} data={categorys} />
        </>
    )
}

export default CategoryList