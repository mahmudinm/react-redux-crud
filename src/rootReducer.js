import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import book from './reducers/book';

export default combineReducers({
	form: formReducer,
	book
});