import instance from '../utils/api';

export const getAuthorsAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get('author', data)
			.then((res) => {
				dispatch({type: 'GET_AUTHORS', value: res.data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const editAuthorsAPI = (id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get(`author/${id}/edit`)
			.then((res) => {
				dispatch({type: 'FIND_AUTHOR', value: res.data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const storeAuthorsAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post('author', data)
			.then((res) => {
				dispatch({type: 'STORE_AUTHOR', value: data})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const updateAuthorsAPI = (data, id) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.post(`author/${id}`, data)
			.then((res) => {
				dispatch({type: 'UPDATE_AUTHOR', value: data, id: id})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}

export const deleteAuthorsAPI = (id) => (dispatch) => {
	// dilakukan tanpa async atau langsung tanpa axios / tanpa jeda
	dispatch({type: 'DELETE_AUTHOR', value: id})

	const promise = new Promise((resolve, reject) => {
		instance.post(`book/${id}`, { _method: 'DELETE' })
			.then((res) => {
				// dilakukan dengan async dan ada loading atau jeda ketika delete
				// dispatch({type: 'DELETE_AUTHOR', value: id})
				console.log(res);
				resolve(res)
			}, (err) => {
				reject(err)
			})			
	})

	return promise;
}