import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Album.less";
import PhotosInAlbum from "./PhotosInAlbum"
import {fetchAlbum, fetchSpecificAlbum} from "../actions/albums";
import {connect} from "react-redux";
import {getAlbumById, getAllPhotosIds} from "../reducers";
import {fetchAlbumPhotos} from "../actions/photos";

const b = block("Album");

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {album, photosIds, fetchAlbum, fetchPhotos} = this.props;
        const {id} = this.props.match.params;

        if (!album || album.id === undefined) {
            fetchAlbum(id);
            fetchPhotos(id);
            return null;
        }
        return <div className={b()}>
            Album #{album.id} has {photosIds.length} pics
            <PhotosInAlbum photosIds={photosIds}/>
        </div>
    }
}

export default connect((state, props) => {
        const {id} = props.match.params;
        const album = getAlbumById(id, state);
        const photosIds = getAllPhotosIds(state);
        return {album, photosIds};
    }, (dispatch) => ({
        fetchAlbum: id => dispatch(fetchSpecificAlbum(id)),
        fetchPhotos: userId => dispatch(fetchAlbumPhotos(userId))
    })
)(Album);
