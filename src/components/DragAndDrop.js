import React, {Component} from "react";
import "../styles/DragAndDrop.less";
import block from '../helpers/BEM'
import Dropzone from 'react-dropzone'
import axios from "axios/index";

const b = block("DragAndDrop");

class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {images: []}
    }

    handleDrop(files) {
        files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", 'lmvvml1v');
            formData.append("api_key", "775112651137943");
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then(response => {
                const data = response.data;
                const publicID = data.public_id;
                const val = [...this.state.images, publicID];
                this.setState({images: val});
                this.props.callback('images', publicID);
            })
        });
    };

    render() {
        return <div>
            <Dropzone
                onDrop={this.handleDrop.bind(this)}
                multiple={true}
                accept="image/jpeg, image/jpg, image/png"
                className={b()}
                activeClassName={b(['active'])}
                rejectClassName={b(['reject'])}
            >
                <p className={b('text')}>+</p>
            </Dropzone>
        </div>
    }
}

export default DragAndDrop;