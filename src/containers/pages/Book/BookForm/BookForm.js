import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { ReduxForm } from '../../../../components/ReduxForm'
import { connect } from 'react-redux'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  }
  if (!values.author) {
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


	renderField = ({ input, label, type, meta: { touched, error } }) => (
	    <div className="form-group">
	      <label>{label}</label>
	      <input {...input} placeholder={label} type={type} className="form-control"/>
	      {touched && error && <span className="invalid-feedback">{error}</span>}
	    </div>
	)

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
						   {/*component={ReduxForm} />*/}
				</div>
				<div className="form-group">
					<Field name="author" 
						   placeholder="Book Author"
						   label="Author"
						   type="input" 
						   component={ReduxForm} />
						   {/*component={ReduxForm} />								*/}
				</div>
				<div className="form-group">
					<Field name="category" 
						   placeholder="Book Category"
						   label="Category"
						   type="input" 
						   component={ReduxForm} />
						   {/*component={ReduxForm} />								*/}
				</div>
				<input type="submit" value={this.props.book.id ? "UPDATE" : "CREATE" } className="btn btn-sm btn-block btn-primary"/>
			</form>		
		)
	}
}

export default reduxForm({form: 'book', validate})(BookForm)