import { GET_ERRORS, GET_BOOKS_DATA, GET_BOOK } from './types';
import axios from 'axios';

export const createBook = (book, history) => dispatch => {
    return axios.post('/api/books/create', book, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
    })
    .then(res => {
        history.push('/admin');
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const loadBooks = () => dispatch => {
    return axios.get('/api/books')
    .then(res => {
        dispatch({
            type: GET_BOOKS_DATA,
            payload: res.data
        });
        return res.data;
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const loadBook = (id, history) => dispatch => {
    return axios.get('/api/book/' + id)
    .then(res => {
        dispatch({
            type: GET_BOOK,
            payload: res.data
        });
        return res.data;  
      })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const updateBook = (book, history) => dispatch => {
    return axios.put('/api/book', book)
    .then(res => {
        history.push('/admin');
        return res.data;
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const removeBook = (id) => dispatch => {
    return axios.put('/api/books/delete', {id})
    .then(res => {
        return res.data;
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

