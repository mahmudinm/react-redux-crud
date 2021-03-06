import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import book from './reducers/book'
import author from './reducers/author'

export default combineReducers({
	form: formReducer,
	book,
	author
});