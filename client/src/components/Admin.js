import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as actionBook from '../actions/book';
import { connect } from 'react-redux';

class Admin extends Component {
    constructor(){
        super();
        this.state = {
          data: []
        };
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    handleDelete(id) {
        let confirmPopup = window.confirm("Are you sure to delete this book! ?");
        confirmPopup && (this.props.removeBook(id) && this.loadData())
      }
    handleEdit(id) {
        this.props.editBook(id);
    }
    componentDidMount() {
        this.loadData();
    }

    loadData(){
        this.props.loadBooks();
    }

    render() {
        const { books } = this.props.books;
      return (
        <div>
        <h2>Admin page</h2>
        <div className="row justify-content-md-center">
            <div className="col-md-2"><Link className="nav-link btn btn-primary btn-sm" to="/new-book">&#43; Add new book</Link></div>
        </div>
        <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>{books.map((item, key) => {
                 return (
                    <tr key = {key}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.author}</td>
                        <td><Link className="nav-link form-control" to={`/book/${item._id}`}>Edit</Link></td>
                        {/* <td><input type="button" className="form-control" onClick={ this.handleEdit(item._id) } value="Edit" /></td> */}
                        <td><input type="button" className="form-control" onClick={()=>{this.handleDelete(item._id)} } value="Delete" /></td>
                    </tr>
                  )
               
               })}
        </tbody>
         </table>
         </div>
      )
    }
  }
  const mapStateToProps = state => ({
    books: state.books,
  });
  export default connect(mapStateToProps, actionBook)(Admin);
//   export default Admin;