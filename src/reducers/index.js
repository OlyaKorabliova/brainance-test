import {combineReducers} from 'redux';
import users, * as fromUsers from './users'
import albums, * as fromAlbums from './albums'

const testApp = combineReducers({
    users,
    albums,
});

export default testApp;

export const getAllUsersIds = (state) => fromUsers.getAllUsersIds(state.users);
export const getUserById = (id, state) => fromUsers.getUserById(id, state.users);

//----------------------------
export const getAllAlbumsIds = (state) => fromAlbums.getAllAlbumsIds(state.albums);
export const getAlbumById = (id, state) => fromAlbums.getAlbumById(id, state.albums);
