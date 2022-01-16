import React, { useContext } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = (props) => {
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()

    return currentUser ? (
            <Route path={props.path} element={props.element}/>
        ) : (navigate('/'))

}

export default PrivateRouter
