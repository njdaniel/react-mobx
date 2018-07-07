import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('AuthStore')
@observer
export default class Login extends Component {
    render() {
        const { AuthStore } = this.props

        return <div>Username is {AuthStore.username}</div>
    }
}