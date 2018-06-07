import React, {Component} from "react";
import block from "../helpers/BEM";
import "../styles/Photo.less";
import {getPhotoById} from "../reducers";
import {fetchSpecificPhoto} from "../actions/photos";
import {connect} from "react-redux";

const b = block("Photo");

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {photo, fetchPhoto} = this.props;
        const {id} = this.props.match.params;

        if (!photo || photo.id === undefined) {
            fetchPhoto(id);
            return null;
        }
        return <div className={b()}>Photo #{photo.id}</div>
    }
}

export default connect((state, props) => {
        const {id} = props.match.params;
        const photo = getPhotoById(id, state);
        return {photo};
    }, (dispatch) => ({
        fetchPhoto: id => dispatch(fetchSpecificPhoto(id))
    })
)(Photo);
