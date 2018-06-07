import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Gallery.less";
import {connect} from "react-redux";
import {getAlbumById} from "../reducers";
import {Link} from "react-router-dom";

const b = block("Gallery");

class AllAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className={b()}>
            {this.props.albums.map(al =>
                <Link className={b('block')} key={al.id} to={`/album/${al.id}`}>
                    <div className={b("caption")}>{al.title}</div>
                </Link>
            )}
        </div>
    }
}

export default connect((state, props) => {
        const albums = props.albumsIds.map(el => getAlbumById(el, state));
        return {albums};
    }, null
)(AllAlbums);
