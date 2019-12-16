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
			.then((res) => {
				console.log(res)
				this.props.getBooks()
			}, (err) => {
				console.log(err.response)
			})
	}

	render() {
		return(
			<Fragment>
				<div className="container">
					<div className="row">
						<Link to="/books/create" className="btn btn-primary float-right">CREATE NEW BOOK</Link>
					</div>

					<div className="row mt-3">
						{this.props.book.data.map((item, key) => 
							<div className="col-md-4" key={item.id}>
								<div className="card">
									<div className="card-header">
										Buku {item.name}
										<br/>
										<hr/>
										<Link to={`/books/${item.id}/edit`} className="btn btn-sm btn-primary">EDIT</Link> &nbsp;
										<button onClick={() => this.handleDelete(item.id)} className="btn btn-sm btn-danger">DELETE</button>
									</div>
									<div className="card-body">
										Author {item.author} <br/>
										Category {item.category}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	book: state.book
})

const mapDispatchToProps = (dispatch) => ({
	getBooks: () => dispatch(getBooksAPI()),
	deleteBooks: (id) => dispatch(deleteBooksAPI(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage);