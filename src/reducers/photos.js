import {combineReducers} from 'redux';
import {assoc} from "ramda";
import {FETCH_PHOTO, FETCH_PHOTO_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

export const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
            return {
                ...state,
                ...action.photos
            };
        case FETCH_FAIL:
            return action;
        default:
            return state;
    }
};

export const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
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

export const fetching = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PHOTO:
            return assoc(action.id, true, state);
        case FETCH_PHOTO_SUCCESS:
            return assoc(action.id, false, state);
        case FETCH_FAIL:
            return assoc(action.id, false, state);
        default:
            return state;
    }
};

export const getAllPhotosIds = (state) => state.allIds;
export const getPhotoById = (id, state) => state.byId[id];

export default combineReducers({
    byId,
    allIds,
    fetching
});