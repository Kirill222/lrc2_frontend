import { createStore, combineReducers } from "redux"
import booksReducer from "./books_reducer"

let reducer = combineReducers({
    books: booksReducer
})

let store = createStore(reducer)

export default store