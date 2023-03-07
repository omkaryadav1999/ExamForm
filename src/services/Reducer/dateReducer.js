import { GET_DATE } from "../constant/constant";

const initialState = [];

const ReducerDate = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE:
            return [action.data]
        default:
            return state
    }
}

export default ReducerDate