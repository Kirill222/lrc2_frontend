import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router'
import {deleteBook} from '../../BLL/books_reducer'
import { useDispatch } from 'react-redux'
import axios from 'axios'



export default function Book({book}) {

    const history = useHistory()
    const dispatch = useDispatch()

    const onDeleteHandler =  (bookId) => {
        console.log(bookId)
        axios.delete(`http://localhost:5000/api/books/${bookId}`)
        dispatch(deleteBook(bookId))
    }
 
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id} >
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={book.title}
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {book.author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {book.rating}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {book.yearOfPublication}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>        
                    <Button size="small" color="primary" onClick={() => history.push(`/book/${book.id}`)}>
                        Learn More...
                    </Button>
                    <Button size="small" color="primary" onClick={() => onDeleteHandler(book.id)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}