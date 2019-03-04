import { GET_BOOKS_DATA, GET_BOOK } from '../actions/types';

const initialState = {
    books: [],
    book: {}
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_BOOKS_DATA:
            return {
                ...state,
                books: action.payload
            };
        case GET_BOOK:
            return {
                ...state,
                book: action.payload
            };
        default: 
            return state;
    }
}