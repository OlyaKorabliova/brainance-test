import {FETCH_USER, FETCH_USER_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

import * as fromApi from "../api/fetch";
import {usersListSchema} from "../helpers/schema";
import {normalize} from 'normalizr';

export const fetchUser = (id) => ({type: FETCH_USER, id});
export const fetchUserSuccess = (id, ids, users) => ({type: FETCH_USER_SUCCESS, id, ids, users});
export const fetchFail = (id) => ({type: FETCH_FAIL, id, error: true});

// -------------------------------------------------------

export const fetchInputUser = id => async (dispatch) => {
    dispatch(fetchUser(id));
    let users = await (await fromApi.getUser(id)).json();
    users = normalize([users], usersListSchema);
    dispatch(fetchUserSuccess(id, users.result, users.entities.users))
};