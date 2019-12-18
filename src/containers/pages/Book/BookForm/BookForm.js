import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../../../../components/renderField'
import { renderFileField } from '../../../../components/renderFileField'
import { renderSelectField } from '../../../../components/renderSelectField'
import { connect } from 'react-redux'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  }
  if (!values.author_id) {
    errors.author_id = 'Author Required'
  }    
  if (!values.category) {
    errors.category = 'Category Required'
  }    
  if (!values.image) {
    errors.image = 'Image Required'
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
						   component={renderField} />
				</div>
				<div className="form-group">
				    <Field
				    	name="author_id"
				    	label="Author"
				    	component={renderSelectField}>
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
						   component={renderField} />
				</div>
				<div className="form-group">
					{ this.props.book.image ? 
						<img 
							src={`http://localhost:8000/image/${this.props.book.image}`} 
							alt={this.props.book.image}
							className="img img-rounded"
							style={{ width: '200px' }} />
						: ''
					}	
					<Field name="image" 
						   placeholder="Book Image"
						   label="Image"
						   type="file" 
						   component={renderFileField} />
				</div>
				<input type="submit" value={this.props.book.id ? "UPDATE" : "CREATE" } className="btn btn-sm btn-block btn-primary"/>
			</form>		
		)
	}
}

export default reduxForm({form: 'book', validate})(BookForm)