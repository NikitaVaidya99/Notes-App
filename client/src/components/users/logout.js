import React from 'react'
import {startLogoutUser} from '../../actions/user'
import { connect } from 'react-redux'

function Logout(props){
    props.dispatch(startLogoutUser(props))
        return (
        <div></div>
        )
    }
export default connect()(Logout)