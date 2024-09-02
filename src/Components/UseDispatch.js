import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../cake/cakeActions'
export const UseDispatch = () => {
    const dispatch = useDispatch()
    const selectionfunction = state => state.cakes.numOfCakes
    const select = useSelector(selectionfunction)

    return (
        <div>
            <h1>NUm of cakes {select}</h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )
}
