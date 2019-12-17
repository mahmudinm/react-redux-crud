import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBooksAPI, storeBooksAPI, editBooksAPI, updateBooksAPI } from '../../../../actions/book';
import BookForm from './BookForm';

class BookFormPage extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.editBooks(id)
		} else {
			this.props.createBooks();
		}
	}

	submit = (data) => {
		const { id } = this.props.match.params;
		console.log(data);
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
			this.props.storeBooks(data)
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
						<BookForm book={this.props.book} authors={this.props.authors} onSubmit={submit}/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	book: state.book.book,
	authors: state.book.authors
})

const mapDispatchToProps = (dispatch) => ({
	createBooks: () => dispatch(createBooksAPI()),
	storeBooks: (data) => dispatch(storeBooksAPI(data)),
	editBooks: (id) => dispatch(editBooksAPI(id)),
	updateBooks: (data, id) => dispatch(updateBooksAPI(data, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookFormPage)