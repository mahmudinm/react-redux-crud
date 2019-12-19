import React from 'react'
import Table from '../../../components/Table'

export default function BookList({ books }) {
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
			}
		],
		[]
	)

	return (
		<React.Fragment>
			<Table columns={columns} data={books} />
		</React.Fragment>
	)
}