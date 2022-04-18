import axios from "axios";

class BookService
{
    retrieveAllBook(name) {
        return axios.get(`https://springbootlibrary.herokuapp.com/books`);
    }
    deleteBook(id) {
        return axios.delete(`https://springbootlibrary.herokuapp.com/book/${id}`);
    }
    updateBook(id, book) {
        return axios.put(` https://springbootlibrary.herokuapp.com/books/${id}`, book);
    }
    createBook(book) {
        return axios.post(`https://springbootlibrary.herokuapp.com/books`, book);
    }

}
export default new BookService();