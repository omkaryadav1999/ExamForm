import { GET_FORM } from "../constant/constant";


export const actionForm = (data) => {
    console.log(data)
    return {
        type: GET_FORM,
        data
    }

}

