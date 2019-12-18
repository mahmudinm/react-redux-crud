import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBooksAPI, deleteBooksAPI } from '../../../actions/book'

class BookListPage extends Component {

	componentDidMount() {
		this.props.getBooks()
	}

	handleDelete = (id) => {
		console.log(id)
		this.props.deleteBooks(id)
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
	

		return(
			<Fragment>
				<div className="container mt-5">

					<Link to="/books/create" className="btn btn-primary">CREATE NEW BOOK</Link>
					<div className="clearfix"></div>

					{ this.props.books.length > 0 ? books : loading }

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