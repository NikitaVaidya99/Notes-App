import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from'redux-thunk'
import {notesReducers} from '../reducers/notes'
import {categoriesReducers} from '../reducers/categories'
import {usersReducers} from '../reducers/user'

const configStore=()=>{
    const store=
        createStore(combineReducers({
            notes:notesReducers,
            categories:categoriesReducers,
            user:usersReducers
        }), applyMiddleware(thunk))
    
    return store
}
export default configStore