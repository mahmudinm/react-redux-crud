import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../../../../components/renderField'
import { connect } from 'react-redux'

const validate = (values) => {
  const errors = {}
  if (!values.first_name) {
    errors.first_name = 'First Name Required'
  }
  if (!values.last_name) {
    errors.last_name = 'Last Name Required'
  }
  if (!values.email) {
    errors.email = 'Email Required'
  }    
  if (!values.handphone) {
    errors.handphone = 'Handphone Required'
  }    
  return errors
}  

// let AuthorForm = ({ handleSubmit, initialValues }) => {
class AuthorForm extends Component {

	componentWillReceiveProps = (nextProps) => {
		const { author } = nextProps
		// ngeload form hanya sekali
		console.log('author.id', author.id);
		console.log('this.props', this.props.author.id);
		if (author.id !== this.props.author.id) {
			console.log('ok');
			this.props.initialize(author)
		}
	}

	render(){
		const {handleSubmit} = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<Field name="first_name" 
								   placeholder="First Name"
								   label="First Name"
								   type="input" 
								   component={renderField} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<Field name="last_name" 
								   placeholder="Last Name"
								   label="Last Name"
								   type="input" 
								   component={renderField} />
						</div>
					</div>
				</div>
				<div className="form-group">
					<Field name="email" 
						   placeholder="Email"
						   label="Email"
						   type="email" 
						   component={renderField} />
				</div>
				<div className="form-group">
					<Field name="handphone" 
						   placeholder="Handphone"
						   label="Handphone"
						   type="input" 
						   component={renderField} />
				</div>
				<input type="submit" value={this.props.author.id ? "UPDATE" : "CREATE" } className="btn btn-sm btn-block btn-primary"/>
			</form>		
		)
	}
}

export default reduxForm({form: 'author', validate})(AuthorForm)