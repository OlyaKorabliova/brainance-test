import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/AllAlbums.less";
import {connect} from "react-redux";
import {getAlbumById} from "../reducers";

const b = block("AllAlbums");

class AllAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <ul className={b()}>
            {this.props.albums.map(al =>
                <li key={al.id}>{al.title}</li>
            )}
        </ul>
    }
}

export default connect((state, props) => {
        const albums = props.albumsIds.map(el => getAlbumById(el, state));
        return {albums};
    }, null
)(AllAlbums);
