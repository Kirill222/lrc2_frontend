import { Typography } from '@material-ui/core'
import {useFormik} from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from '../../BLL/books_reducer'
import { useHistory } from 'react-router'
import * as axios from 'axios'

import * as yup from 'yup'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Input } from '@mui/material'


const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    rating: yup.number('Rating is a number from 0 to 10').positive('Rating should be a positive number').min(0).max(10).required('Rating is required'),
    yearOfPublication: yup.number('Rating is a number').positive('Rating should be a positive number').min(0).max(new Date().getFullYear()).required('Year is required'),
  })


const UploadBookForm = () => {      

    const dispatch = useDispatch()
    const history = useHistory()
    
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            rating: '',
            yearOfPublication: '',
            bookCover: '',
        },
        onSubmit: async (values) => {  
            
            console.log(values)
            
            let formData = new FormData()

            formData.append('bookCover', values.bookCover)
            formData.append('title', values.title)
            formData.append('author', values.author)
            formData.append('rating', values.rating)
            formData.append('yearOfPublication', values.yearOfPublication)

            await axios.post("http://localhost:5000/api/books", formData, {
                headers: {
                  "Content-Type" : "multipart/form-data"
                }
              }) 
              
            formik.resetForm()
            history.push("/books")
        },
        validationSchema: validationSchema,
    })

    //Book cover file from input
    const bookCoverUpload = (e) => {
        formik.setFieldValue('bookCover', e.target.files[0])
    }  
   
    return (
        <div style={{width: '500px', margin: '0 auto'}}>  
            <Typography variant="h2">Upload a new book</Typography>

            <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '100%'}}>

                <TextField 
                    fullWidth
                    id="title"
                    name='title'
                    label='Title'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.title}
                    onChange={formik.handleChange}

                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    onBlur={formik.handleBlur}
                />
                <TextField 
                    fullWidth
                    id="author"
                    name='author'
                    label='Author'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.author}
                    onChange={formik.handleChange}

                    error={formik.touched.author && Boolean(formik.errors.author)}
                    helperText={formik.touched.author && formik.errors.author}
                    onBlur={formik.handleBlur}
                />               
                <TextField 
                    fullWidth
                    id="rating"
                    name='rating'
                    label='Rating'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.rating}
                    onChange={formik.handleChange}

                    error={formik.touched.rating && Boolean(formik.errors.rating)}
                    helperText={formik.touched.rating && formik.errors.rating}
                    onBlur={formik.handleBlur}
                />
                <TextField 
                    fullWidth
                    id="yearOfPublication"
                    name='yearOfPublication'
                    label='Year of Publication'
                    autoComplete='off'
                    margin='normal'
                    value={formik.values.yearOfPublication}
                    onChange={formik.handleChange}

                    error={formik.touched.yearOfPublication && Boolean(formik.errors.yearOfPublication)}
                    helperText={formik.touched.yearOfPublication && formik.errors.yearOfPublication}
                    onBlur={formik.handleBlur}
                />
                <Input
                    fullWidth
                    id="bookCover"
                    name='bookCover'
                    label='Book cover' 
                    type='file' 
                    onChange={bookCoverUpload} 

                    error={formik.touched.bookCover && Boolean(formik.errors.bookCover)}
                    helperText={formik.touched.bookCover && formik.errors.bookCover}
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

export default UploadBookForm