import {combineReducers} from 'redux';
import users, * as fromUsers from './users'
import albums, * as fromAlbums from './albums'
import photos, * as fromPhotos from './photos'

const testApp = combineReducers({
    users,
    albums,
    photos
});

export default testApp;

export const getAllUsersIds = (state) => fromUsers.getAllUsersIds(state.users);
export const getUserById = (id, state) => fromUsers.getUserById(id, state.users);

//----------------------------
export const getAllAlbumsIds = (state) => fromAlbums.getAllAlbumsIds(state.albums);
export const getAlbumById = (id, state) => fromAlbums.getAlbumById(id, state.albums);

//----------------------------
export const getAllPhotosIds = (state) => fromPhotos.getAllPhotosIds(state.photos);

export const getPhotoById = (id, state) => fromPhotos.getPhotoById(id, state.photos);
