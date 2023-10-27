import { CategoryFormEdit } from "../../components"
import { categoryForm as CategoryFormProps, category } from "../../types"
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import { message, notification } from 'antd';

const showErrorNotification = (message: string) => {
    notification.error({
      message: 'Error',
      description: message,
    });
  };
  


const CategoryEdit = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [category, setCategory] = useState<category>()

    const { id } = useParams();

    const getCategory = useCallback(
        async () => {
            const fetching = await fetch(`http://localhost:8000/books/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            const response: { data: category } = await fetching.json();
            console.log(response)

            setCategory({ title: response.data.title, priority: response.data.priority , _id: response.data._id, createdAt: response.data.createdAt, owner: response.data.owner  , isDone: response.data.isDone!.toString() })
        },
        [id, token]
    )
    console.log(category)
    useEffect(
        () => {
            getCategory()
        },
        [getCategory]
    )

    const onSubmit = async (values: CategoryFormProps) => {
        const params = {
            "id": id,
            "title": values.title,
            "priority": values.priority,
            "createdAt": values.createdAt, 
            "owner": values.owner, 
            "isDone": values.isDone 
        }
        try {
            const fetching = await fetch(`http://localhost:8000/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(params)
            })
            if (fetching.ok) {

                navigate('/category')
                
            }
        } catch (error) {
            showErrorNotification("gk jalan bro")
        }
    }

    if (category) {
        return <CategoryFormEdit onSubmit={onSubmit} category={category} />
    }

    return null
}

export default CategoryEdit