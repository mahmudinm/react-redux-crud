import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooksAPI, deleteBooksAPI } from '../../../actions/book'
import BookList from './BookList'

class BookListPage extends Component {

	componentDidMount() {
		this.props.getBooks()
	}

	handleDelete = (data) => {
		this.props.deleteBooks(data.original.id)
	}

	render() {

		const loading = (
			<div className="row mt-3">
				<p>Loading...</p>
			</div>
		)

		const Table = (
			<BookList books={this.props.books} onClick={this.handleDelete} />
		)

		return(
			<Fragment>
				<div className="container mt-5">

					<Link to="/books/create" className="btn btn-primary">CREATE NEW BOOK</Link>
					<div className="clearfix"></div>

					{ this.props.books.length > 0 ? Table : loading }

				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	books: state.book.books
})

const mapDispatchToProps = (dispatch) => ({
	getBooks: () => dispatch(getBooksAPI()),
	deleteBooks: (id) => dispatch(deleteBooksAPI(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage);