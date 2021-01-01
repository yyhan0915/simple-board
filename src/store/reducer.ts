import { combineReducers } from 'redux';
import loading from './loading/reducer';

const rootReducer = combineReducers({
    loading,
});

// rootReducer & type of rootReducer
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
