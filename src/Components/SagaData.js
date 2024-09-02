import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_USER_REQUEST } from "../AsynActions/Saga/SagaActionTypes"
import { fetchUserSuccess, fetchUserFailure } from "../AsynActions/Saga/SagaActions"

export const userData = () => {
    return function* SagaData() {
        try {
            const user = yield call(fetch, `https://jsonplaceholder.typicode.com/users`)
            const data = yield user.json()
            const user1 = data.map(user => user)
            yield put(fetchUserSuccess(user1))
        } catch (error) {
            yield put(fetchUserFailure(error))
        }
    }

}

export function* WatchFetch() {
    yield takeEvery(FETCH_USER_REQUEST, userData)
}
