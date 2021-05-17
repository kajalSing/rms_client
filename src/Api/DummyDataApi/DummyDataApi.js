import axios from 'axios'
import { fetchDataRequest, fetchDataSuccess, fetchDataFaliure } from '../../Redux/DummyData/DummyAction'

export const fetchDataAPI = (searchParams) => {
    let url = 'https://jsonplaceholder.typicode.com/todos'

    const config = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
    };

    return (dispatch) => {
         // dispatch(fetchDataRequest)
        // axios.post(url, searchParams, config)
        //     .then(response => {
        //         const data = response.data
        //         dispatch(fetchDataSuccess(data))
        //     })
        //     .catch(error => {
        //         const errorMsg = error.message
        //         dispatch(fetchDataFaliure(errorMsg))
        //     })

        axios.get(url)
            .then(response => {
                const data = response.data
                dispatch(fetchDataSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchDataFaliure(errorMsg))
            })
    }
}