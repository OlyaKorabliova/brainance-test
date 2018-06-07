import {FETCH_PHOTO, FETCH_PHOTO_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

import * as fromApi from "../api/fetch";
import {photosListSchema} from "../helpers/schema";
import {normalize} from 'normalizr';

export const fetchPhoto = (id) => ({type: FETCH_PHOTO, id});
export const fetchPhotoSuccess = (id, ids, photos) => ({type: FETCH_PHOTO_SUCCESS, id, ids, photos});
export const fetchFail = (id) => ({type: FETCH_FAIL, id, error: true});

// -------------------------------------------------------

export const fetchSpecificPhoto = id => async (dispatch) => {
    dispatch(fetchPhoto(id));
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