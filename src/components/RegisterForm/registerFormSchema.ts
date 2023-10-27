import * as yup from 'yup'

export const initialValues = {
    username: '',
    password:'',
    role: ''
}

export const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    role: yup.string().required()
})