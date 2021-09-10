import { Typography, Grid } from "@material-ui/core"
import  Book  from './Book'



const Books = () => {

    let books = [
        {
            id: 1,
            title: 'Game of Thrones',
            author: 'Spiderman',
            rating: 9.5,
            yearOfPublication: 2000,
        },
        {
            id: 2,
            title: 'Batman',
            author: 'Keyboard Smith',
            rating: 3.2,
            yearOfPublication: 2000,
        }, 
        {
            id: 3,
            title: 'Tom Jones',
            author: 'Mouse Hover',
            rating: 6.7,
            yearOfPublication: 2000,
        },
        {
            id: 4,
            title: 'Need for Speed',
            author: 'Battlefield Warfare',
            rating: 1.3,
            yearOfPublication: 2000,
        },

    ]

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