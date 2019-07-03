import { combineReducers } from 'redux'
import errorsReducer from '../reducers/errors_reducer'
import entitiesReducer from '../reducers/entities_reducer'
import sessionReducer from '../reducers/session_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer

})

export default rootReducer