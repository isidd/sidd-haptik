import { ADD,ERROR,SET_STAR,DELETE } from './actionTypes';


// dispach action for adding a friend
export function AddListing(data) {
    return { type: ADD, value: data }

}

// dispatch action for setting a star
export function SetStar(data) {
    return { type: SET_STAR, value: data }

}

// disptch action for deleting a friend
export function DeleteFriend(data) {
    return { type: DELETE, value: data }

}






export function ResponseError(err) {
    return { type: ERROR, value: err }

}


// mock API handling with mock data
let get_list = (data) => {
    return new Promise((resolve, reject) => {
        if (!data) {
            reject({
                status: 400,
                message: "error"
            })
        }
            resolve({
                status: 200,
                data
            })
    })
}


// Adding a friends asyncly
export function addFriend(data) {
    return dispatch => {
        // mock hitting the api
        return get_list(data).then((res) => {
            if (res.status === 200) {
                let { data } = res;
                return dispatch(AddListing(data));
            } else if (res.status === 401) {
                return dispatch(ResponseError(res.message));
            }
        }).catch((err) => {
            if (err.message) return dispatch(ResponseError(err.message));
            else return dispatch(ResponseError(err));
        })
    }
}

// Setting start for a friends asyncly
export function setStar(data) {
    return dispatch => {
         // mock hitting the api
        return get_list(data).then((res) => {
            if (res.status === 200) {
                let { data } = res;
                return dispatch(SetStar(data));
            } else if (res.status === 401) {
                return dispatch(ResponseError(res.message));
            }
        }).catch((err) => {
            if (err.message) return dispatch(ResponseError(err.message));
            else return dispatch(ResponseError(err));
        })
    }
}

// Deleting a friends asyncly
export function deleteFriend(data) {
    return dispatch => {
            // mock hitting the api
        return get_list(data).then((res) => {
            if (res.status === 200) {
                let { data } = res;
                return dispatch(DeleteFriend(data));
            } else if (res.status === 401) {
                return dispatch(ResponseError(res.message));
            }
        }).catch((err) => {
            if (err.message) return dispatch(ResponseError(err.message));
            else return dispatch(ResponseError(err));
        })
    }
}

