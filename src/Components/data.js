import axios from "axios"
import { fetchUserFailure, fetchUserLoading, fetchUserSuccess } from "../AsynActions/AsyncAction"
const userData = () => {
    return function (dispatch1, getState) {
        dispatch1(fetchUserLoading())
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            const user = res.data.map(user => user)
            dispatch1(fetchUserSuccess(user))
        }).catch(error => {
            dispatch1(fetchUserFailure(error))
        })
    }

}
export default userData