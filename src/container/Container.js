import React, { Component } from 'react'
import { Form } from '../components/Form'
import { List } from '../components/List'

export default class container extends Component {
    render() {
        return (
            <div>
                
                <Form />
                <List />
            </div>
        )
    }
}
