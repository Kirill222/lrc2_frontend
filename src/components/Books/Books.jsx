import { Typography, Grid } from "@material-ui/core"
import { Pagination } from '@mui/material'
import  Book  from './Book'
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getBooks, setTotalBookCount, setPageNumber } from "../../BLL/books_reducer"
import { useDispatch } from "react-redux"
import * as axios from 'axios'

const Books = () => {

    const books = useSelector(state => state.books.books)
    const page = useSelector(state => state.books.page)
    const limit = useSelector(state => state.books.limit)
    const totalBookCount = useSelector(state => state.books.totalBookCount)
    const dispatch = useDispatch()

    const numberOfPages = Math.ceil(totalBookCount / limit)      
    
    useEffect(() => {

        const fetchedBooks = async () => {
            let data = await axios.get(`http://localhost:5000/api/books?page=${page}&limit=${limit}`)            

            let books = data.data.results
            let totalCount = data.data.totalCount
            dispatch(getBooks(books))
            dispatch(setTotalBookCount(totalCount))
        } 
        fetchedBooks()         
    }, [books])


    const onChangeHandler = (e) => { 
        console.log(e)
        dispatch(setPageNumber(Number(e.target.outerText)))
    }

   

    return (
        <div>
            <Typography component='h1' variant='h3' align='center'>Books</Typography>
            <Grid container spacing={3}>
                {
                    books.map(book => {
                        return (
                            <Book book={book} key={book.id} />
                        )
                    })
                }
            </Grid>

            <Pagination
                onChange={onChangeHandler}
                style={{display: "flex", justifyContent: "center"}}
                variant="outlined"
                count={numberOfPages}  
            /> 

        </div>
        
    )
}

export default Books