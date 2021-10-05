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
            bookCover: '',
        },
        onSubmit: async (values) => {     
            
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
        }
    })

    const bookCoverUpload = (e) => {
        formik.setFieldValue('bookCover', e.target.files[0])
    }   
   
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
                <div>
                    <input type="file" id="bookCover" name="bookCover" onChange={bookCoverUpload} />
                    <label htmlFor="file">Choose file to upload</label>                    
                </div>

                <button type="submit">Submit</button>
            </form>

        </>

    )
}

export default UploadBookForm