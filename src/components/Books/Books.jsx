import { Typography, Grid } from "@material-ui/core"
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

    const numberOfPages = Math.ceil(totalBookCount / limit)
    const pages = []
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    console.log(pages)

    const dispatch = useDispatch()
    
    useEffect(() => {

        const fetchedBooks = async () => {
            let data = await axios.get(`http://localhost:5000/api/books?page=${page}&limit=${limit}`)

            console.log(data.data)

            let books = data.data.results
            let totalCount = data.data.totalCount
            dispatch(getBooks(books))
            dispatch(setTotalBookCount(totalCount))
        } 
        fetchedBooks() 
        
    }, [books])


    const onPageClick = (e) => {
        console.log(Number(e.target.outerText))
        dispatch(setPageNumber(Number(e.target.outerText)))
    }


    return (
        <div>
            <Typography component='h1' variant='h3' align='center'>Books</Typography>
            <Grid container>
                {
                    books.map(book => {
                        return (
                            <Book book={book} key={book.id} />
                        )
                    })
                }
            </Grid>

            <div>
               {
                   pages.map(page => {
                       return <a key={page} onClick={onPageClick}>{page}</a>
                   })
               }
            </div>

        </div>
        
    )
}

export default Books