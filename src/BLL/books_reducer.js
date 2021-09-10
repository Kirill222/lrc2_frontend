const GET_BOOKS = 'GET_BOOKS'
const ADD_BOOK = 'ADD_BOOK'

const initialState = {
    books: [
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
}

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS:
            return {...state, books: action.books}
        case ADD_BOOK:
            return {...state, books: [...state.books, action.book]}
        default:
            return state
    }
}

//Action Creators
export const getBooks = (books) => ({type: GET_BOOKS, books})
export const addBook = (book) => ({type: ADD_BOOK, book})

export default booksReducer