// Register.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionBook from '../actions/book';
class Book extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadEditData();
    }

    loadEditData(){
        console.log('loadEditData',this.props.match.params);
        if(this.props.match.params.id != null){
            this.props.loadBook(this.props.match.params.id, this.props.history);
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const book = {
            name: this.state.name,
            author: this.state.author,
        }
        if(this.props.match.params.id != null){
            book._id = this.props.match.params.id;
            this.props.updateBook(book, this.props.history);
        }else{
            this.props.createBook(book, this.props.history);
            
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if(nextProps.books) {
            this.setState({
                name: nextProps.books.book.name,
                author: nextProps.books.book.author,
            });
        };
    }
    render() {
        const { errors } = this.props;
        console.log(errors);
        const isExistedId = this.props.match.params.id;
        let title;
        (isExistedId) ? (title = <h2 style={{marginBottom: '40px'}}>Update Book</h2>) : (title = <h2 style={{marginBottom: '40px'}}>New Book</h2>);
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            { title }
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name || '' }
                    />
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    placeholder="Author"
                    className="form-control"
                    name="author"
                    onChange={ this.handleInputChange }
                    value={ this.state.author || '' }
                    />
                    {errors.author && <p className="text-danger">{errors.author}</p>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        { isExistedId ? 'Update' : 'Create' }
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books,
    errors: state.errors,
  });
export default connect(mapStateToProps, actionBook)(Book);