import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchInputUser} from "../actions/users";
import {getAllAlbumsIds, getUserById} from "../reducers";
import {fetchUserAlbums} from "../actions/albums";
import AllAlbums from "./AllAlbums";
import Header from "./Header";

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
        return <div>
            <Header text={`Hi, ${user.name}`}/>
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
        fetchAlbums: userId => dispatch(fetchUserAlbums(userId))
    })
)(User);
