import * as yup from 'yup'

export const initialValues = {
    title: '',
    priority: '',
    createdAt: '',
    owner: '',
    isDone: '',
    
}

export const validationSchema = yup.object({
    title: yup.string().required(),
    priority: yup.string().required(),
    // createdAt: yup.string().required(),
    // owner: yup.string().required(),
    isDone: yup.string().required(),
})