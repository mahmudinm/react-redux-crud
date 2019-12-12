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

export const findBooksAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get(`book/${id}`)
			.then((res) => {
				dispatch({type: 'FIND_BOOK', value: res.data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const createBooksAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('book', data)
			.then((res) => {
				dispatch({type: 'CREATE_BOOK'})
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
				dispatch({type: 'UPDATE_BOOK'})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const deleteBooksAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post(`book/${id}`, { _method: 'DELETE' })
			.then((res) => {
				dispatch({type: 'DELETE_BOOK'})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}