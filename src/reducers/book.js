const initialState = {
	data: [],
	book: {}
}

const book = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_BOOKS':
			return {
				...state,
				book: {},
				data: action.value,
			}
		case 'FIND_BOOK':
			return {
				...state,
				book: action.value,
			}
		case 'CREATE_BOOK':
			return {
				...state,
				data: [...state.data, action.value],
				book: {}
			}
		case 'UPDATE_BOOK':
			const book = action.value
			return {
				...state,
				data: state.data.map(item => item.id === book.id ? book : item ),
				book: {}
			}
		case 'DELETE_BOOK':
			console.log(action.value);
			return {
				...state,
				data: state.data.filter(item => item.id !== parseInt(action.value))
			}
		default: return state
	}
}

export default book;