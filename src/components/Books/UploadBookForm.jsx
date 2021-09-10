import { Typography } from '@material-ui/core'
import {useFormik} from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from '../../BLL/books_reducer'
import { useHistory } from 'react-router'



const UploadBookForm = () => {    

    const dispatch = useDispatch()
    const history = useHistory()
    
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            rating: '',
            yearOfPublication: '',
        },
        onSubmit: values => {
            const bookWithAddedId = {...values, id: Math.random()}

            dispatch(addBook(bookWithAddedId))
            console.log(bookWithAddedId)
            formik.resetForm()
            history.push('/books')
        }
    })
   
    return (
        <>  
            <Typography variant="h2">Upload a new book</Typography>

            <form onSubmit={formik.handleSubmit}>
                <input type="text" name='title' onChange={formik.handleChange} value={formik.values.title}/>
                <input type="text" name='author' onChange={formik.handleChange} value={formik.values.author}/>
                <input type="text" name='rating' onChange={formik.handleChange} value={formik.values.rating}/>
                <input type="text" name='yearOfPublication' onChange={formik.handleChange} value={formik.values.yearOfPublication}/>
                <button type="submit">Submit</button>
            </form>

        </>

    )
}

export default UploadBookForm