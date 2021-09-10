import { Typography, Grid } from "@material-ui/core"
import  Book  from './Book'
import { useSelector } from "react-redux"



const Books = () => {

    const books = useSelector(state => state.books.books)   

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