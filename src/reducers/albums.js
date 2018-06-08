import {combineReducers} from 'redux';
import {FETCH_ALBUM_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

export const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                ...action.albums
            };
        case FETCH_FAIL:
            return action;
        default:
            return state;
    }
};

export const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALBUM_SUCCESS:
            return [
                ...state,
                ...action.ids
            ].filter((el, i, arr) => arr.indexOf(el) === i);
        case FETCH_FAIL:
            return action;
        default:
            return state;
    }
};

export const getAllAlbumsIds = (state) => state.allIds;
export const getAlbumById = (id, state) => state.byId[id];

export default combineReducers({
    byId,
    allIds
});