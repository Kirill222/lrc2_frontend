import { Typography, Grid } from "@material-ui/core"
import  Book  from './Book'
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getBooks } from "../../BLL/books_reducer"
import { useDispatch } from "react-redux"
import * as axios from 'axios'



const Books = () => {

    const books = useSelector(state => state.books.books)

    const dispatch = useDispatch()
    
    useEffect(async () => {
        let data = await axios.get('http://localhost:5000/api/books')
        let {books} = data.data
        dispatch(getBooks(books))
    }, [])

    return (
        <div>
            <Typography component='h1' variant='h3' align='center'>Books</Typography>
            <Grid container>
                {
                    books.map(book => {
                        return (
                            <Book book={book} />
                        )
                    })
                }
            </Grid>

        </div>
        
    )
}

export default Books