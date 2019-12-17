import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { ReduxForm } from '../../../../components/ReduxForm'
import { connect } from 'react-redux'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  }
  if (!values.author_id) {
    errors.author = 'Author Required'
  }    
  if (!values.category) {
    errors.category = 'Category Required'
  }    
  return errors
}  

// let BookForm = ({ handleSubmit, initialValues }) => {
class BookForm extends Component {

	componentWillReceiveProps = (nextProps) => {
		const { book } = nextProps
		// ngeload form hanya sekali
		if (book.id !== this.props.book.id) {
			this.props.initialize(book)
		}
	}

	render(){
		const {handleSubmit} = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<Field name="name" 
						   placeholder="Book Name"
						   label="Name"
						   type="input" 
						   component={ReduxForm} />
				</div>
				<div className="form-group">
{/*					<Field name="author" 
						   placeholder="Book Author"
						   label="Author"
						   type="input" 
						   component={ReduxForm} />*/}
					<label htmlFor="author_id">Author</label>
			        <Field 
			        	name="author_id" 
			        	id="author_id" 
			        	component="select"
			        	className="form-control">
			    		<option value="">Select Author</option>
					    {this.props.authors.map((item, key) => 
				    		<option value={item.id} key={key}>{item.first_name} {item.last_name}</option>
					    )}
				    </Field>
				</div>
				<div className="form-group">
					<Field name="category" 
						   placeholder="Book Category"
						   label="Category"
						   type="input" 
						   component={ReduxForm} />
				</div>
				<input type="submit" value={this.props.book.id ? "UPDATE" : "CREATE" } className="btn btn-sm btn-block btn-primary"/>
			</form>		
		)
	}
}

export default reduxForm({form: 'book', validate})(BookForm)