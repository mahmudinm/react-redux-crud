import instance from '../utils/api';

export const getBooksAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get('book', data)
			.then((res) => {
				dispatch({type: 'GET_BOOKS', value: res.data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const createBooksAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get(`book/create`)
			.then((res) => {
				dispatch({type: 'CREATE_BOOK', value: res.data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const storeBooksAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('book', data)
			.then((res) => {
				dispatch({type: 'STORE_BOOK', value: data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const editBooksAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get(`book/${id}/edit`)
			.then((res) => {
				dispatch({type: 'EDIT_BOOK', value: res.data[1], authors: res.data[0]})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const updateBooksAPI = (data, id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post(`book/${id}`, data)
			.then((res) => {
				dispatch({type: 'UPDATE_BOOK', value: data, id: id})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const deleteBooksAPI = (id) => (dispatch) => {
	// dilakukan tanpa async atau langsung tanpa axios / tanpa jeda
	dispatch({type: 'DELETE_BOOK', value: id})

	const promise = new Promise((resolve, reject) => {
		instance.post(`book/${id}`, { _method: 'DELETE' })
			.then((res) => {
				// dilakukan dengan async dan ada loading atau jeda ketika delete
				// dispatch({type: 'DELETE_BOOK', value: id})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}