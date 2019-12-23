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

		const books = ( 
			<div className="row mt-3">
				{this.props.books.map((item, key) => 
					<div className="col-md-4" key={item.id}>
						<div className="card">
							<div className="card-header">
								<p>Buku : {item.name}</p>
								{ item.image ? 
									<img src={`http://localhost:8000/image/${item.image}`} style={{ width: '100px', height: 'auto' }}/>
									: ''
								 }
								<hr/>
								<Link to={`/books/${item.id}/edit`} className="btn btn-sm btn-primary">EDIT</Link> &nbsp;
								<button onClick={() => this.handleDelete(item.id)} className="btn btn-sm btn-danger">DELETE</button>
							</div>
							<div className="card-body">
								Author : {item.author.first_name} <br/>
								Category : {item.category}
							</div>
						</div>
						<br/>
					</div>
				)}
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