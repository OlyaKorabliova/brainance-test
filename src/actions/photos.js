import {FETCH_PHOTO_SUCCESS, FETCH_FAIL, ADD_PHOTO} from '../helpers/actionTypes';

import * as fromApi from "../api/fetch";
import {photosListSchema} from "../helpers/schema";
import {normalize} from 'normalizr';
import v4 from 'node-uuid';

export const fetchPhotoSuccess = (id, ids, photos) => ({type: FETCH_PHOTO_SUCCESS, id, ids, photos});
export const fetchFail = (id) => ({type: FETCH_FAIL, id, error: true});

export const addPhoto = (id, photos) => ({type: ADD_PHOTO, id, photos});

// -------------------------------------------------------

export const fetchSpecificPhoto = id => async (dispatch) => {
    let photo = await (await fromApi.getPhoto(id)).json();
    photo = normalize([photo], photosListSchema);
    dispatch(fetchPhotoSuccess(id, photo.result, photo.entities.photos))
};

export const fetchAlbumPhotos = albumId => async (dispatch) => {
    const photos = await (await fromApi.getAlbumPhotos(albumId)).json();
    const photos2 = normalize(photos, photosListSchema);
    photos.map(el => {
        dispatch(fetchPhotoSuccess(el.id, photos2.result, photos2.entities.photos))
    });
};

export const addNewPhoto = photo => async dispatch => {
    photo['id'] = v4();
    const albumPhotos = await (await fromApi.getAlbumPhotos(photo.albumId)).json();
    const albumPhotos2 = normalize([...albumPhotos, photo], photosListSchema);
    dispatch(addPhoto(photo.id, albumPhotos2.entities.photos));
};