import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Header.less";
import {Redirect} from "react-router";

const b = block("Header");

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick() {
        console.log('Log out');
        this.setState({redirect: true})

    }

    render() {
        const {redirect} = this.state;
        const {text} = this.props;

        return <div className={b()}>
            <h2 className={b('title')}>{text}</h2>
            <button type='click' className={b('btn')} onClick={this.onBtnClick}>Log Out</button>
            {redirect && (<Redirect to={`/`}/>)}
        </div>
    }
}

export default Header;