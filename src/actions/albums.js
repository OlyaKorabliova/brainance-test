import {FETCH_ALBUM, FETCH_ALBUM_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

import * as fromApi from "../api/fetch";
import {albumsListSchema} from "../helpers/schema";
import {normalize} from 'normalizr';

export const fetchAlbum = (id) => ({type: FETCH_ALBUM, id});
export const fetchAlbumSuccess = (id, ids, albums) => ({type: FETCH_ALBUM_SUCCESS, id, ids, albums});
export const fetchFail = (id) => ({type: FETCH_FAIL, id, error: true});

// -------------------------------------------------------

export const fetchAlbums = userId => async (dispatch) => {
    const albums = await (await fromApi.getUserAlbums(userId)).json(); // []
    const albums2 = normalize(albums, albumsListSchema);
    albums.map(el => {
        dispatch(fetchAlbumSuccess(el.id, albums2.result, albums2.entities.albums))
    });
};