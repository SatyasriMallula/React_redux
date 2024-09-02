
import { connect } from 'react-redux'
// import buyCake from '../redux'
// import { buyCake } from '../redux'
// import { buyCake } from '../cake/cakeActions'
const ItemContainer = (props) => {

    return (
        <div>
            <h1>item {props.item} </h1>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let itemState = ownProps.cake ? state.cakes.numOfCakes : state.IceCream.numOfIceCreams
    return {
        item: itemState
    }
}


export default connect(mapStateToProps)(ItemContainer)