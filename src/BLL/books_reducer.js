const GET_BOOKS = 'GET_BOOKS'
const ADD_BOOK = 'ADD_BOOK'
const DELETE_BOOK = 'DELETE_BOOK'
const SET_TOTAL_BOOK_COUNT = 'SET_TOTAL_BOOK_COUNT'
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'


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
    ],
    page: 1,
    limit:8,
    totalBookCount: null,
}

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS:
            return {...state, books: action.books}
        case ADD_BOOK:
            return {...state, books: [...state.books, action.book]}
        case DELETE_BOOK: {
            const withoutRemovedBook = state.books.filter(book => {
                return book.id !== action.bookId
            })
            console.log(withoutRemovedBook)

            return {...state, books: withoutRemovedBook}
        }
        case SET_TOTAL_BOOK_COUNT:
            return {...state, totalBookCount: action.totalBookCount}
        case SET_PAGE_NUMBER:
            return {...state, page: action.pageNumber}
        default:
            return state
    }
}

//Action Creators
export const getBooks = (books) => ({type: GET_BOOKS, books})
export const addBook = (book) => ({type: ADD_BOOK, book})
export const deleteBook = (bookId) => ({type: DELETE_BOOK, bookId})
export const setTotalBookCount = (totalBookCount) => ({type: SET_TOTAL_BOOK_COUNT, totalBookCount})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})

export default booksReducer