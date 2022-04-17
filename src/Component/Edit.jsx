import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BookService from '../api/BookService';
import HeaderComponent from './HeaderComponent';
class BookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.params.id,
            name:'',
            author:'',
            price:0,
        }
        this.onSubmit=this.onSubmit.bind(this);
    }
    
    validate(values) {
        let errors = {}
        if(!values.name) {
            errors.name = 'Enter a name'
        }
       else if(!values.author ) {
            errors.author = 'Enter an author'
        }
         else if(values.name.length<5) {
            errors.name = 'Enter atleast 5 Characters in name'
        }
        return errors

    }

    onSubmit(values) {

        let book = {
            id: this.state.id,
            name: values.name,
            author: values.author,
            price:values.price
        }

        if (this.state.id === -1) 
        {
            BookService.createBook(book)
                .then(() => this.props.navigate('/'))
        }
        else
        {
            BookService.updateBook(this.state.id, book)
                .then(() => this.props.navigate("/"))
        }
          
        console.log(values);
    }
    render() { 
        let {name,author,price} = this.state
        return (
            <div>
                <HeaderComponent name="Book Form"></HeaderComponent>
                <div className="container">
                    <Formik
                        initialValues={{ name,author,price}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="author" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label className='form-title'>Book's name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label className='form-title'>Author</label>
                                        <Field className="form-control" type="text" name="author" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label className='form-title'>Price(in Rs)</label>
                                        <Field className="form-control" type="number" name="price" />
                                    </fieldset>
                                    <fieldset  className="form-group">
                                    <button className="btn btn-success" type="submit">Save</button>
                                    </fieldset>
                                </Form>
                            )
                        }
                    </Formik>
               </div>
            </div> 
        );
    }
}
 
export default BookForm;

