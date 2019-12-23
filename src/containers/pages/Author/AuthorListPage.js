import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAuthorsAPI, deleteAuthorsAPI } from '../../../actions/author'
import AuthorList from './AuthorList'

class AuthorListPage extends Component {

	componentDidMount() {
		this.props.getAuthors()
	}

	handleDelete = (data) => {
		console.log(data.original.id)
		this.props.deleteAuthors(data.original.id)
	}

	render() {

		const loading = (
			<div className="row mt-3">
				<p>Loading...</p>
			</div>
		)

		const Table = (
			<AuthorList authors={this.props.authors} onClick={this.handleDelete} />
		)

		return(
			<Fragment>
				<div className="container mt-5">

					<Link to="/authors/create" className="btn btn-primary">CREATE NEW AUTHOR</Link>
					<div className="clearfix"></div>

					{/*{ this.props.authors.length > 0 ? authors : loading }*/}
					{ this.props.authors.length > 0 ? Table : loading }

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