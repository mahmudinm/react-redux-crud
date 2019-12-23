import React from 'react'
import Table from '../../../components/Table'
import { Link } from 'react-router-dom'

export default function AuthorList({ authors, onClick }) {
	const columns = React.useMemo(
		() => [	
			{
				Header: 'Name',
				accessor: (props) => (
					props.first_name + ' ' + props.last_name 
				)
			},
			{
				Header: 'Email',
				accessor: 'email'
			},
			{
				Header: 'Handphone',
				accessor: 'handphone'
			},
			{
				Header: 'Action',
				disableFilters: true,
				Cell: ({row}) => (
					<div>
		               <Link to={`/authors/${row.original.id}/edit`} className="btn btn-sm btn-primary">Edit</Link>&nbsp;
		               <button onClick={() => onClick(row)} className="btn btn-sm btn-danger">Delete</button>
					</div>
				)
			}
		],
		[onClick]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={authors} />
		</React.Fragment>
	)
}