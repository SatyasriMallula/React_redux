
// const redux = require('redux')
// const createStore = redux.createStore
// const combineReducers = redux.combineReducers
// const redux_Logger = require('redux-logger')
// const logger = redux_Logger.createLogger
// const applymiddleware = redux.applyMiddleware()

// const BUY_CAKE = "BUY_CAKES";
// const BUY_ICECREAM = "BUY_ICECREAM"

// function buyIceCream() {
//     return {
//         type: BUY_ICECREAM
//     }
// }


// function buyCake() {
//     return {
//         type: BUY_CAKE
//     }
// }

// const initialState = {
//     numOfCakes: 10
// }

// const initialStateIce = {
//     numOFIceCreams: 20
// }

// const IceReducer = (state = initialStateIce, action) => {
//     switch (action.type) {
//         case "BUY_ICECREAM":
//             return {
//                 ...state, initialStateIce: state.initialStateIce - 1

//             }
//         default: return state
//     }
// }
// const cakeReducer = (state = initialStateIce, action) => {
//     switch (action.type) {
//         case "BUY_ICECREAM":
//             return {
//                 ...state, initialStateIce: state.initialStateIce - 1

//             }
//         default: return state
//     }
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "BUY_CAKE":
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case "BUY_ICECREAM":
//             return {
//                 ...state,
//                 numOFIceCreams: state.numOFIceCreams - 1

//             }
//         default: return state
//     }
// }


// const rootReducers = combineReducers({
//     cake: cakeReducer,
//     Ice: IceReducer
// })
// const store = createStore(rootReducers, applymiddleware(logger))
// store.dispatch(buyCake())// which is just like dispatch({type:"BUY_CAKE"})
// store.dispatch(buyIceCream())


// store.subscribe(() => console.log("updated State", store.getState()))