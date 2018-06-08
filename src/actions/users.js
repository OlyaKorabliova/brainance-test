import {FETCH_USER_SUCCESS, FETCH_FAIL} from '../helpers/actionTypes';

import * as fromApi from "../api/fetch";
import {usersListSchema} from "../helpers/schema";
import {normalize} from 'normalizr';

export const fetchUserSuccess = (id, ids, users) => ({type: FETCH_USER_SUCCESS, id, ids, users});
export const fetchFail = (id) => ({type: FETCH_FAIL, id, error: true});

// -------------------------------------------------------

export const fetchInputUser = id => async (dispatch) => {
    let users = await (await fromApi.getUser(id)).json();
    users = normalize([users], usersListSchema);
    dispatch(fetchUserSuccess(id, users.result, users.entities.users))
};