import {combineReducers} from 'redux';
import {FETCH_PHOTO_SUCCESS, ADD_PHOTO, FETCH_FAIL} from '../helpers/actionTypes';

export const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
        case ADD_PHOTO:
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
        case ADD_PHOTO:
            return [...state, action.id];
        case FETCH_FAIL:
            return action;
        default:
            return state;
    }
};


export const getAllPhotosIds = (state) => state.allIds;
export const getPhotoById = (id, state) => state.byId[id];

export default combineReducers({
    byId,
    allIds
});