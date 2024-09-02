import React from 'react'
import { connect } from 'react-redux'
// import buyCake from '../redux'
// import { buyCake } from '../redux'
import { buyCake } from '../cake/cakeActions'
import { useState } from 'react'
export const NewCakeContainer = (props) => {
    const [value, setValue] = useState(1)
    return (
        <div>
            <h1>Number of cakes{props.numOfCakes}</h1>
            <input type='text' placeholder='enter num of cakes to reduce' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={() => props.buyCake(value)} >Buy {value} Cakes</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cakes.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)