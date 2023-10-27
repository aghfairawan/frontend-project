import { categoryForm as CategoryFormProps } from "../../types"
import { CategoryFormAdd } from "../../components"
import { useNavigate } from "react-router-dom"

const CategoryNew = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const onSubmit = async (values: CategoryFormProps) => {
        const params = {
        
            "title": values.title,
            "priority": values.priority,
            "createdAt": values.createdAt, 
            "owner": values.owner, 
            "isDone": values.isDone  
        }
        try {
            const fetching = await fetch('https://backend-project-production-e181.up.railway.app/books', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify(params)
            })
            await fetching.json()
            navigate('/category')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <CategoryFormAdd onSubmit={onSubmit}/>
    )
}

export default CategoryNew