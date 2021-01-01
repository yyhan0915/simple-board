import { combineReducers } from 'redux';
import loading from './loading/reducer';
import applicant from './applicant/reducer';

const rootReducer = combineReducers({
    loading,
    applicant,
});

// rootReducer & type of rootReducer
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
