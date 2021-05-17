import { combineReducers } from 'redux';
import DummyReducer  from './DummyData/DummyReducer';

const rootReducer = combineReducers({
    data : DummyReducer,
})


export default rootReducer