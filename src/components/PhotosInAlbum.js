import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Gallery.less";

import {connect} from "react-redux";
import {getPhotoById} from "../reducers";
import {Link} from "react-router-dom";

const b = block("Gallery");

class PhotosInAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className={b()}>
            {this.props.photos.map(ph =>
                <Link className={b('block')} key={ph.id} to={`/photo/${ph.id}`}>
                    <img className={b('image')} src={ph.thumbnailUrl} alt={`Photo #${ph.id}`}/>
                    <div className={b("caption")}>{ph.title}</div>
                </Link>
            )}
        </div>
    }
}

export default connect((state, props) => {
        const photos = props.photosIds.map(el => getPhotoById(el, state));
        return {photos};
    }, null
)(PhotosInAlbum);
