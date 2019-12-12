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
				book: {}
			}
		case 'UPDATE_BOOK':
			return {
				...state,
				book: {}
			}
		case 'DELETE_BOOK':
			return {
				...state
			}
		default: return state
	}
}

export default book;