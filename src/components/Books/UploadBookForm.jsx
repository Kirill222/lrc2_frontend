import { Typography } from '@material-ui/core'
import {useFormik} from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { addBook } from '../../BLL/books_reducer'
import { useHistory } from 'react-router'
import * as axios from 'axios'


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
        onSubmit: async (values) => {

            await axios.post("http://localhost:5000/api/books", values)

            formik.resetForm()
            history.push('/books')


            //OLD WAY WITHOUT SERVER (Static application)
            // const bookWithAddedId = {...values, id: Math.random()}
            // dispatch(addBook(bookWithAddedId))
            // console.log(bookWithAddedId)
            // formik.resetForm()
            // history.push('/books')
        }
    })
   
    return (
        <>  
            <Typography variant="h2">Upload a new book</Typography>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" id="title" name='title' onChange={formik.handleChange} value={formik.values.title}/>
                    <label htmlFor="title">Title</label>
                </div>
                <div>
                    <input type="text" id="author" name='author' onChange={formik.handleChange} value={formik.values.author}/>
                    <label htmlFor="author">Author</label>
                </div>
                <div>
                    <input type="text" id="rating" name='rating' onChange={formik.handleChange} value={formik.values.rating}/>
                    <label htmlFor="rating">Rating</label>
                </div>
                <div>
                    <input type="text" id="yearOfPublication" name='yearOfPublication' onChange={formik.handleChange} value={formik.values.yearOfPublication}/>
                    <label htmlFor="yearOfPublication">Year</label>
                </div>

                <button type="submit">Submit</button>
            </form>

        </>

    )
}

export default UploadBookForm