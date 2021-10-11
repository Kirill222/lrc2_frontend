import {useFormik} from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const LoginPage = () => {
    return (
        <div className='login_root'>
            <form className='login_form'>
                <h2>Log in</h2>
            </form>
        </div>
    )
}

export default LoginPage