
import { connect } from 'react-redux'
// import buyCake from '../redux'
// import { buyCake } from '../redux'
import { buyCake } from '../cake/cakeActions'
const CakeContainer = (props) => {

    return (
        <div>
            <h1>Number of cakes {props.numOfCakes} </h1>
            <button onClick={props.buyCake}>Buy Cake</button><br></br>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)