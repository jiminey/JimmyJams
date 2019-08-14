import { combineReducers } from 'redux'
import errorsReducer from '../reducers/errors_reducer'
import entitiesReducer from '../reducers/entities_reducer'
import sessionReducer from '../reducers/session_reducer'
import uiReducer from '../reducers/ui_reducer'
import audioPlayerReducer from '../reducers/audio_player_reducer'
import searchReducer from '../reducers/search_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    player: audioPlayerReducer,
    results: searchReducer,


})

export default rootReducer