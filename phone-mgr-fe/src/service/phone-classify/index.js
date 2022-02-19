import axios from 'axios';

export const add = (title) => {
    return axios.post('http://localhost:3000/phone-classify/add',{
        title,
    });
};

export const list = () => {
    return axios.get('http://localhost:3000/phone-classify/list');
};

export const remove = (id) => {
    return axios.delete(`http://localhost:3000/phone-classify/${id}`);
};

export const updateTitle = (id, title) => {
    return axios.post('http://localhost:3000/phone-classify/update/title',{
        id,
        title,
    });
};
