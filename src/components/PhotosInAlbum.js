import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Gallery.less";

import {connect} from "react-redux";
import {getPhotoById} from "../reducers";
import {Link} from "react-router-dom";
import {addNewPhoto, fetchAlbumPhotos, fetchSpecificPhoto} from "../actions/photos";
import DragAndDrop from "./DragAndDrop";

const b = block("Gallery");
const link = 'https://res.cloudinary.com/dtnnkdylh/image/upload/w_150,h_150,c_fill/';

class PhotosInAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
        this.getStateFromChild = this.getStateFromChild.bind(this);
    }

    getStateFromChild(name, item) {
        this.setState({[name]: [...this.state[name], item]});
        const {photos} = this.props;
        const photo = {
            url: 'https://res.cloudinary.com/dtnnkdylh/image/upload/w_600,h_600,c_fill/' + item,
            thumbnailUrl: "https://res.cloudinary.com/dtnnkdylh/image/upload/w_150,h_150,c_fill/" + item,
            albumId: photos[0].albumId,
            title: item.split('/').pop()
        };
        this.props.addImage(photo);
    };

    showImagePreview() {
        const {images} = this.state;
        if (images.length !== 0) {
            return <div>
                {images.map((el, i) => <img key={i} src={link + el} className={b('image')}/>)}
            </div>
        }
    }


    render() {
        return <div className={b()}>
            <DragAndDrop type={'small'} callback={this.getStateFromChild}/>
            {this.props.photos.map((ph, i) =>
                <Link className={b('block')} key={i} to={`/photo/${ph.id}`}>
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
    }, dispatch => ({
        addImage: photo => dispatch(addNewPhoto(photo)),
        fetchAlbumPhotos: id => dispatch(fetchAlbumPhotos(id))
    })
)(PhotosInAlbum);
