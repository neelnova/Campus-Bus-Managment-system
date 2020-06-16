import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
export default class Logout extends Component {
    constructor(props)
    {
        super(props)
        localStorage.removeItem("username")
        localStorage.removeItem("name")
       
    }

    render() {
        return <Redirect to="visit"/>
       
    }
}
