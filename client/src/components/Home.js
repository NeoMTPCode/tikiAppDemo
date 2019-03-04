import React, { Component } from 'react';
import * as actionBook from '../actions/book';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(){
      super() 
        this.state = {
          data: []
        }
    }
    componentDidMount() {
      this.props.loadBooks();
    }
    render() {
      const { books } = this.props.books;
      return (
        <div>
        <h2>Home page</h2>
        <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>{books.map((item, key) => {
                 return (
                    <tr key = {key}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.author}</td>
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
  export default connect(mapStateToProps, actionBook)(Home);
