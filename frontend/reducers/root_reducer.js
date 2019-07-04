import { combineReducers } from 'redux'
import errorsReducer from '../reducers/errors_reducer'
import entitiesReducer from '../reducers/entities_reducer'
import sessionReducer from '../reducers/session_reducer'
import uiReducer from '../reducers/ui_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: errorsReducer,
    
    


})

export default rootReducer