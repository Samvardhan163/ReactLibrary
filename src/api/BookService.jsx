import axios from "axios";

class BookService
{
    retrieveAllBook(name) {
        return axios.get(`http://localhost:8080/books`);
    }
    deleteBook(id) {
        return axios.delete(`http://localhost:8080/book/${id}`);
    }
    updateBook(id, book) {
        return axios.put(` http://localhost:8080/books/${id}`, book);
    }
    createBook(book) {
        return axios.post(`http://localhost:8080/books`, book);
    }

}
export default new BookService