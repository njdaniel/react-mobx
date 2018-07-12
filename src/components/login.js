import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


@inject('AuthStore')
@observer
export default class Login extends Component {
    handleLogin = (e) => {
        prompt("Clicked")
    }

    render() {
        const { AuthStore } = this.props

        return (
            <div>
                <MuiThemeProvider>
                    <p>Username is {AuthStore.username}</p>
                    <div>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.props.AuthStore.setUsername(newValue)}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.props.AuthStore.setPassword(newValue)}
                        />
                        <br/>
                        <Button 
                        label="Submit" 
                        primary={true} 
                        style={style} 
                        onClick={this.handleLogin.bind(this)}>
                            Submit
                        </Button>
                    </div>
                </MuiThemeProvider>    
            </div>
        );
    }
}
const style = {
    margin: 15,
};