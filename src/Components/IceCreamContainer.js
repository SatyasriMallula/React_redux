import React from 'react'
import { ICeAction } from '../IceCream/IceAction'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h1>Number of Icecreams {props.numOfIceCreams} </h1>
            <h1>{props.num}</h1>
            <button onClick={props.buyIceCream}>BUY ICECREAM </button>
        </div>
    )
}

const mapStateToProp = (state) => {

    return {
        numOfIceCreams: state.IceCream.numOfIceCreams,
        num: state.IceCream.numOfIceCreams
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        buyIceCream: () => dispatch(ICeAction())
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(IceCreamContainer)