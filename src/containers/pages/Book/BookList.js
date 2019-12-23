import React from 'react'
import Table from '../../../components/Table'
import { Link } from 'react-router-dom'

export default function BookList({ books, onClick }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'Name',
				accessor: 'name'
			},
			{
				Header: 'Author',
				accessor: 'author.first_name'
			},
			{
				Header: 'Category',
				accessor: 'category'
			},
			{
				Header: 'Action',
				disableFilters: true,
				Cell: ({row}) => (
					<div>
		               <Link to={`/books/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>&nbsp;
		               <button onClick={() => onClick(row)} className="btn btn-sm btn-danger">Delete</button>
					</div>
				)
			}
		],
		[onClick]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={books} />
		</React.Fragment>
	)
}