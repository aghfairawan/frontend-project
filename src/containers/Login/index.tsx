import { LoginForm as LoginFormProps, LoginResponse } from "../../types"
import { LoginForm } from "../../components"

const Login = () => {

    const token = localStorage.getItem('token');

    const onSubmit = async (data: LoginFormProps) => {
        const fetching = await fetch('https://backend-project-production-e181.up.railway.app/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const response: { data: string } = await fetching.json()
        if (response) {
            localStorage.setItem('token', response.data)
            window.location.replace('/category')
            console.log(response)
        }
    }

    return (
        <LoginForm onSubmit={onSubmit} />
    )
}

export default Login