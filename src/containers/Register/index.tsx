import { RegisterForm as RegisterFormProps, RegisterResponse } from "../../types"
import { RegisterForm } from "../../components"

const Register = () => {

    const onSubmit = async (data: RegisterFormProps) => {
        try {
            const fetching = await fetch('https://backend-project-production-e181.up.railway.app/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!fetching.ok) {
                throw new Error(`Failed to register: ${fetching.status}`);
            }

            const response: { data: RegisterResponse } = await fetching.json();

            if (response) {
                // Assuming you want to redirect the user after a successful registration.
                window.location.replace('/');
                console.log(response);
            }
        } catch (error) {
            console.error('Registration error:', error);
            // Handle the error appropriately, e.g., show an error message to the user
        }
    }

    return (
        <RegisterForm onSubmit={onSubmit} />
    )
}

export default Register
