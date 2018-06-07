import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Login.less";
import {Link} from 'react-router-dom';
import {Redirect} from "react-router";

const b = block("Login");

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            id: null
        };
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(e) {
        e.preventDefault();
        const value = this.refs.login.value;
        console.log('you clicked', value);
        this.setState({redirect: true, id: value})

    }

    render() {
        const {redirect, id} = this.state;

        return <div>
            <form className={b()}>
                <input ref='login' type="number" className={b('input')} placeholder='User ID'/>
                <button type='submit' className={b('btn')} onClick={this.onBtnClick}>Click Me</button>
            </form>
            {redirect && (<Redirect to={`/user/${id}`}/>)}
        </div>
    }
}

export default Login;