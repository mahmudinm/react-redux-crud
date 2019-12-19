import React from 'react'
import { useTable, usePagination } from 'react-table'

export default function Table ({ columns, data })  {

	const {
	    getTableProps,
	    getTableBodyProps,
	    headerGroups,
	    prepareRow,
	    page, // Instead of using 'rows', we'll use page,
	    // which has only the rows for the active page

	    // The rest of these things are super handy, too ;)
	    canPreviousPage,
	    canNextPage,
	    pageOptions,
	    pageCount,
	    gotoPage,
	    nextPage,
	    previousPage,
	    setPageSize,
	    state: { pageIndex, pageSize },		
	} = useTable(
		{
			columns,
			data,
			initialState: { pageindex: 2 },	
		},
		usePagination
	)


  // Render the UI for your table
  return (
    <React.Fragment>
      <table {...getTableProps()} className="table mt-4 mb-3">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="float-right mb-3">
        <select
          style={{ padding: '7px', borderRadius: '3px', border: '1px solid #007bff' }}
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>{' '}
        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button className="btn btn-outline-primary" style={{ marginTop: '-4px' }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
    </React.Fragment>
  )
}