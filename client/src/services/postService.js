import api from './api'

export const getAll = () => {
    return fetch(api.getPosts)
        .then(res => res.json())
        .catch(err => console.error(`Handles error: ${err}`));
}
