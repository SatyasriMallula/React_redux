import React, { useEffect } from 'react'
import userData from './data'
import { connect } from 'react-redux'
const AsyncActions = ({ data1, userData }) => {

    useEffect(() => {
        userData()
    }, [])
    console.log(data1.error)
    return (
        <div>
            {data1.loading ? <h1>loading</h1> : data1.data.length > 0 ? <div>{data1.data.map((user, index) => <p key={index}>{user.id}</p>)}</div> : <h1>{data1.error.message}</h1>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data1: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userData: () => dispatch(userData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AsyncActions)









