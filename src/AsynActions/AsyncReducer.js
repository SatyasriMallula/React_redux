import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./ActionTypes";
const initialState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                data: [],
                error: ""
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: " "
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
export default reducer