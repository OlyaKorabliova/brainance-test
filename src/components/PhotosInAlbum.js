import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/PhotosInAlbum.less";
import {connect} from "react-redux";
import {getPhotoById} from "../reducers";
import {Link} from "react-router-dom";

const b = block("PhotosInAlbum");

class PhotosInAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <ol className={b()}>
            {this.props.photos.map(ph =>
                <Link key={ph.id} to={`/photo/${ph.id}`}>
                    <li>{ph.title}</li>
                </Link>
            )}
        </ol>
    }
}

export default connect((state, props) => {
        const photos = props.photosIds.map(el => getPhotoById(el, state));
        return {photos};
    }, null
)(PhotosInAlbum);
