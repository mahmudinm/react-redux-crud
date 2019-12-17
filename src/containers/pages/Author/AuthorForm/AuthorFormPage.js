import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storeAuthorsAPI, editAuthorsAPI, updateAuthorsAPI } from '../../../../actions/author';
import AuthorForm from './AuthorForm';

class AuthorFormPage extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.editAuthors(id)
				.then((res) => {
					console.log(res)
				}, (err) => {
					console.log(err.response)
				})
		}
	}

	submit = (data) => {
		const { id } = this.props.match.params;
		console.log(data)
		if (id){
			data._method = "PUT"
			console.log(data)
			this.props.updateAuthors(data, id)
				.then((res) => {
					console.log(res)
					this.props.history.push('/authors');
				}, (err) => {
					console.log(err.response)
				})
		} else {
			this.props.storeAuthors(data)
				.then((res) => {
					console.log(res)
					this.props.history.push('/authors');
				}, (err) => {
					console.log(err.response)
				})
		}
	}

	render() {
		const { submit } = this;

		return(
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<h2>Author Form</h2>
						<hr/>
						<AuthorForm author={this.props.author} onSubmit={submit}/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	author: state.author.author
})

const mapDispatchToProps = (dispatch) => ({
	storeAuthors: (data) => dispatch(storeAuthorsAPI(data)),
	editAuthors: (id) => dispatch(editAuthorsAPI(id)),
	updateAuthors: (data, id) => dispatch(updateAuthorsAPI(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorFormPage)