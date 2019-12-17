const initialState = {
	books: [],
	book: {},
	authors: []
}

const book = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_BOOKS':
			return {
				...state,
				book: {},
				books: action.value,
			}
		case 'CREATE_BOOK':
			return {
				...state,
				authors: action.value
			}
		case 'STORE_BOOK':
			return {
				...state,
				authors: [...state.books, action.value],
				book: {}
			}
		case 'EDIT_BOOK':
			return {
				...state,
				book: action.value,
				authors: action.authors
			}
		case 'UPDATE_BOOK':
			const book = action.value
			return {
				...state,
				// tidak bisa di gunakan ketika ada relasi data /
				// karena tidak bisa mengambil relasi data yang ingin di ambil
				// books: state.books.map(item => item.id === book.id ? book : item ),
				book: {}
			}
		case 'DELETE_BOOK':
			console.log(action.value);
			return {
				...state,
				books: state.books.filter(item => item.id !== parseInt(action.value))
			}
		default: return state
	}
}

export default book;