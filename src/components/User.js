import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/User.less";
import {connect} from "react-redux";
import {fetchInputUser} from "../actions/users";
import {getAllAlbumsIds, getUserById} from "../reducers";
import {fetchAlbums} from "../actions/albums";
import AllAlbums from "./AllAlbums";

const b = block("User");

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {user, albumsIds, fetchUser, fetchAlbums} = this.props;
        const {id} = this.props.match.params;
        if (!user || user.id === undefined) {
            fetchUser(id);
            fetchAlbums(id);
            return null;
        }
        return <div className={b()}>
            User #{user.id} Albums Must be here
            <AllAlbums albumsIds={albumsIds}/>
        </div>
    }
}

export default connect((state, props) => {
        const {id} = props.match.params;
        const user = getUserById(id, state);
        const albumsIds = getAllAlbumsIds(state);
        return {user, albumsIds};
    }, (dispatch) => ({
        fetchUser: id => dispatch(fetchInputUser(id)),
        fetchAlbums: userId => dispatch(fetchAlbums(userId))
    })
)(User);
