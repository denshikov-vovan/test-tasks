import axios from 'axios';
import apiUrl from '@/helpers/apiUrl';

export function getProfiles () {
    return axios
        .get(apiUrl('profile'))
        .then(response => response.data)
        .catch(catcher);
}

export function createProfile ({ id, type }) {
    const data = {
        credentials: {},
        id         : id,
        type       : type,
        stdprofile : 'string',
        anonymous  : true,
        proxy: {
            host    : 'string',
            port    : 'string',
            username: 'string',
            password: 'string',
            type    : 'http'
        },
        stop: {
            time: '2019-09-12T09:26:13.709Z',
            delay: 0,
            mode: 'normal'
        }
    };

    return axios
        .post(apiUrl('profile'), data)
        .catch(catcher);
}

export function deleteProfile ({ id, type }) {
    return axios
        .delete(apiUrl(`profile/${type}/${id}`))
        .catch(catcher);
}

// helpers
function catcher (err) {
    return Promise.reject(err.response && err.response.data || err);
}
