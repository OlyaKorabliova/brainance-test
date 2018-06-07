// import React, {Component} from "react";
// import block from "../helpers/BEM";
// import "../styles/Album.less";
// import {fetchInputUser} from "../actions/users";
// import {connect} from "react-redux";
// import {getUserById} from "../reducers";
//
// const b = block("Album");
//
// class Album extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         return <div className={b()}>Album</div>
//     }
// }
//
// export default connect((state, props) => {
//         const {id} = props.match.params;
//         const user = getUserById(id, state);
//         return {user};
//     }, (dispatch) => ({
//         fetchAlbums: userId => dispatch(fetchAlbums(userId))
//     })
// )(User);
