import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FALIURE } from './DummyTypes';

const initialState = {
    loading: true,
    data: [],
    error: '',
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_DATA_SUCCESS : return{
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_DATA_FALIURE : return{
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default Reducer;