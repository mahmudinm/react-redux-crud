import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBooksAPI, findBooksAPI, updateBooksAPI } from '../../../../actions/book';
import BookForm from './BookForm';

class BookFormPage extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.findBooks(id)
				.then((res) => {
					console.log(res)
				}, (err) => {
					console.log(err.response)
				})
		}
	}

	submit = (data) => {
		const { id } = this.props.match.params;
		if (id){
			data._method = "PUT"
			console.log(data)
			this.props.updateBooks(data, id)
				.then((res) => {
					console.log(res)
					this.props.history.push('/books');
				}, (err) => {
					console.log(err.response)
				})
		} else {
			this.props.createBooks(data)
				.then((res) => {
					console.log(res)
					this.props.history.push('/books');
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
							<h2>Book Form</h2>
						<BookForm book={this.props.book} onSubmit={submit}/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	book: state.book.book
})

const mapDispatchToProps = (dispatch) => ({
	createBooks: (data) => dispatch(createBooksAPI(data)),
	findBooks: (id) => dispatch(findBooksAPI(id)),
	updateBooks: (data, id) => dispatch(updateBooksAPI(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookFormPage)