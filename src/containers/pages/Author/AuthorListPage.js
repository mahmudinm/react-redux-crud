import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAuthorsAPI, deleteAuthorsAPI } from '../../../actions/author'

class AuthorListPage extends Component {

	componentDidMount() {
		this.props.getAuthors()
	}

	handleDelete = (id) => {
		console.log(id)
		this.props.deleteAuthors(id)
	}

	render() {

		const loading = (
			<div className="row mt-3">
				<p>Loading...</p>
			</div>
		)

		const authors = ( 
			<div className="row mt-3">
				{this.props.authors.map((item, key) => 
					<div className="col-md-4" key={item.id}>
						<div className="card">
							<div className="card-header">
								Author : {item.first_name} {item.last_name} 
								<br/>
								<hr/>
								<Link to={`/authors/${item.id}/edit`} className="btn btn-sm btn-primary">EDIT</Link> &nbsp;
								<button onClick={() => this.handleDelete(item.id)} className="btn btn-sm btn-danger">DELETE</button>
							</div>
							<div className="card-body">
								Email : {item.email} <br/>
								Handphone : {item.handphone}
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

					<Link to="/authors/create" className="btn btn-primary">CREATE NEW AUTHOR</Link>
					<div className="clearfix"></div>

					{ this.props.authors.length > 0 ? authors : loading }

				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	authors: state.author.authors
})

const mapDispatchToProps = (dispatch) => ({
	getAuthors: () => dispatch(getAuthorsAPI()),
	deleteAuthors: (id) => dispatch(deleteAuthorsAPI(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListPage);