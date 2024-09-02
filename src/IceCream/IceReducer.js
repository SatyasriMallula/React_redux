import { BUY_ICECREAM } from "./IceType";
const initialIceState = {
    numOfIceCreams: 20
}

const IceReducer = (state = initialIceState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state, numOfIceCreams: state.numOfIceCreams - 1
            }
        default: return state
    }
}

export default IceReducer