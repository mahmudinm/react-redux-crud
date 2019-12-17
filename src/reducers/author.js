const initialState = {
	authors: [],
	author: {}
}

const author = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_AUTHORS':
			return {
				...state,
				authors: action.value,
			}
		case 'FIND_AUTHOR':
			return {
				...state,
				author: action.value,
			}
		case 'STORE_AUTHOR':
			return {
				...state,
				authors: [...state.authors, action.value],
				author: {}
			}
		case 'UPDATE_AUTHOR':
			const author = action.value
			return {
				...state,
				authors: state.authors.map(item => item.id === author.id ? author : item ),
				author: {}
			}
		case 'DELETE_AUTHOR':
			console.log(action.value);
			return {
				...state,
				authors: state.authors.filter(item => item.id !== parseInt(action.value))
			}
		default: return state
	}
}

export default author;