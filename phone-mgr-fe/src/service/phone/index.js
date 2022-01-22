import axios from 'axios';
import { getToken } from '@/helpers/token';

axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`;

export const add = (form) => {
    return axios.post(
        'http://localhost:3000/phone/add',
         form,
    );
};

export const list = (data) => {
    return axios.get(
        'http://localhost:3000/phone/list',
        {
            params: data,
        },
    );
};

export const remove = (id) => {
    return axios.delete(
        //此处为模板字符串
        `http://localhost:3000/phone/${id}`,
    );
};

export const updateCount = (data = {}) => {
    return axios.post(
        `http://localhost:3000/phone/update/count`,
        data,
    );
};

export const update = (data = {}) => {
    return axios.post(
        `http://localhost:3000/phone/update`,
        data,
    );
};

export const detail = (id) => {
    return axios.get(
        `http://localhost:3000/phone/detail/${id}`,
    );
};
