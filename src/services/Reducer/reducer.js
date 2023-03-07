import { GET_FORM, GET_DATE } from "../constant/constant";

const initialState = [];

const Reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_FORM:
            return [action.data]

        default:
            return state
    }

}

export default Reducers