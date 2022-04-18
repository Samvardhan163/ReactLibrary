import React, { Component } from 'react'
import BookService from '../api/BookService';
import HeaderComponent from './HeaderComponent';
class BookRepo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            book: [

            ],
            message: null
        }
        this.updateClicked = this.updateClicked.bind(this);
        this.refreshBook = this.refreshBook.bind(this);
        this.deleteBookClicked = this.deleteBookClicked.bind(this);
        this.addBookClicked = this.addBookClicked.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.refreshBook();
        console.log(this.state)
    }
    updateClicked(id) {
        this.props.navigate(`/edit/${id}`)
    }
    refreshBook() {
        BookService.retrieveAllBook()
            .then(
                response => {
                    this.setState({ book: response.data })
                }
            )
    }
    addBookClicked() {
        this.props.navigate(`/edit/-1`)
    }
    deleteBookClicked(id) {
        BookService.deleteBook(id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshBook()
                }
            )

    }

    render() {
        return (
            <div>
                <HeaderComponent name="Library"></HeaderComponent>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.book.map(
                                    book =>
                                        <tr key={book.id}>
                                            <td>{book.name}</td>
                                            <td>{book.author}</td>
                                            <td>{book.price}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateClicked(book.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteBookClicked(book.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <center>
                <div >
                    <button className="btn btn-success" onClick={this.addBookClicked}>Add</button>
                </div>
                </center>
            </div>
        )
    }
}

export default BookRepo