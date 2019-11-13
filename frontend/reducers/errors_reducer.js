import { combineReducers } from "redux";
import sessionErrorsReducer from "../reducers/session_errors_reducer";
import songErrorsReducer from "../reducers/song_errors_reducer";
import userErrorsReducer from "../reducers/users_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  song: songErrorsReducer,
  user: userErrorsReducer
});

export default errorsReducer;
