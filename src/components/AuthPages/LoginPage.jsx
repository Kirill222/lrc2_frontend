import {useFormik} from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import styles from './LoginPage.module.css'


const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email name is required'),
    password: yup.string()
                    .required('No password provided')
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })


const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: (values) => {
          console.log(values)
        },
        validationSchema: validationSchema,
      })


    return (
        <div className={styles.login_root}>
            <form className={styles.login_form} onSubmit={formik.handleSubmit}>
                <h2>Log in</h2>
                <TextField 
                    fullWidth
                    id="email"
                    name='email'
                    label='Email'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.email}
                    onChange={formik.handleChange}

                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
                <TextField 
                    fullWidth
                    type='password'
                    id="password"
                    name='password'
                    label='Password'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.password}
                    onChange={formik.handleChange}

                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    onBlur={formik.handleBlur}
                />
                <Button
                    fullWidth
                    type='submit' 
                    variant="outlined"
                    margin='normal'
                    >Submit</Button>
            </form>
        </div>
    )
}

export default LoginPage