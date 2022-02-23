import {
    del, post, get
  } from '@/helpers/request';

export const add = (form) => {
    return post(
        '/phone/add',
         form,
    );
};

export const list = (data) => {
    return get(
        '/phone/list',
        data
    );
};

export const remove = (id) => {
    return del(
        //此处为模板字符串
        `/phone/${id}`,
    );
};

export const updateCount = (data = {}) => {
    return post(
        `/phone/update/count`,
        data,
    );
};

export const update = (data = {}) => {
    return post(
        `/phone/update`,
        data,
    );
};

export const detail = (id) => {
    return get(
        `/phone/detail/${id}`,
    );
};

export const addMany = (key) => {
    return post('/phone/addMany',{
        key,
    });
};
