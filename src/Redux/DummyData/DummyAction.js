import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FALIURE } from './DummyTypes';

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = data => {

    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFaliure = error => {
    return {
        type: FETCH_DATA_FALIURE,
        payload: error
    }
}