
// import reducer from '../cake/cakeReducer'
import { combineReducers, createStore } from 'redux'
// import IceReducer from '../IceCream/IceReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer1 from '../AsynActions/AsyncReducer'
import { thunk } from 'redux-thunk'
import CreateSagaMiddleware from 'redux-saga'
import { RootSaga } from '../AsynActions/Saga/RootSaga'
// import { composeWithDevTools } from 'redux-devtools-extension';
// const combine = combineReducers(
//     {
//         cakes: reducer,
//         IceCream: IceReducer

//     }
// )
const sagaMiddleWare = CreateSagaMiddleware()
const store = createStore(reducer1, (applyMiddleware(logger, thunk, sagaMiddleWare)))
sagaMiddleWare.run(RootSaga)
export default store 