import { Button, Card, Input, Typography, Select, DatePicker } from "antd"
import { useFormik } from "formik"
import { category, categoryForm as CategoryFormProps } from "../../types"
import { initialValues, validationSchema } from "./categoryFormSchema"
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import dayjs from 'dayjs';



interface Props {
    onSubmit: (values: CategoryFormProps) => void
    category?: category
}

const CategoryFormAdd = ({ onSubmit, category }: Props) => {

    const navigate = useNavigate();

    const handleSubmit = (values: CategoryFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: category ?? initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title={"Add Task"} bordered style={{ width: 350 }}>
            <form onSubmit={formMik.handleSubmit}>
                <div>
                    <Typography.Paragraph>{'Title'}</Typography.Paragraph>
                    <Input name={'title'}
                        value={formMik.values.title}
                        onChange={formMik.handleChange('title')}
                        status={formMik.errors.title && 'error'}
                        placeholder={'Enter Title'}
                    />
                    {formMik.errors.title && (
                        <Typography.Paragraph>{formMik.errors.title}</Typography.Paragraph>
                    )}
                </div>
                <div>
                    <Typography.Paragraph>{'Priority'}</Typography.Paragraph>
                    <Select
                        value={formMik.values.priority}
                        style={{ width: '100%' }}
                        options={[{ value: 'High', label: 'High' }, { value: 'Medium', label: 'Medium' }, { value: 'Low', label: 'Low' }]}
                        onChange={val => formMik.setFieldValue('priority', val)}
                        status={formMik.errors.priority && 'error'}
                        placeholder={'Enter Status'}
                    />
                   
                    {formMik.errors.priority && (
                        <Typography.Paragraph>{formMik.errors.priority}</Typography.Paragraph>
                    )}
                </div>
    
                
                <div>
                    <Typography.Paragraph>{'Status'}</Typography.Paragraph>
                    <Select
                        value={formMik.values.isDone}
                        style={{ width: '100%' }}
                        options={[{ value: 'Done', label: 'Done' }, { value: 'On Progress', label: 'On Progress' }, { value: 'Abort', label: 'Abort' }]}
                        onChange={val => formMik.setFieldValue('isDone', val)}
                        status={formMik.errors.isDone && 'error'}
                        placeholder={'Enter Status'}
                    />
                   
                    {formMik.errors.isDone && (
                        <Typography.Paragraph>{formMik.errors.isDone}</Typography.Paragraph>
                    )}
                </div >
                <div style={{ marginTop: '50px' }}>

                <Button type={'primary'} onClick={() => navigate('/category')}>Back</Button>
                <Button style={{ marginLeft: '163px' }} type={'primary'} htmlType={"submit"}>Submit</Button>
                </div>
            </form>
        </Card>
    )
}

export default CategoryFormAdd