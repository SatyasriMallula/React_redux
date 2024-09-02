import { all } from "redux-saga/effects";
import { WatchFetch } from "../../Components/SagaData";
export function* RootSaga() {
    yield all([WatchFetch])
}