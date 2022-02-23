import {
    del, post, get
  } from '@/helpers/request';

export const add = (title) => {
    return post('/phone-classify/add',{
        title,
    });
};

export const list = () => {
    return get('/phone-classify/list');
};

export const remove = (id) => {
    return del(`/phone-classify/${id}`);
};

export const updateTitle = (id, title) => {
    return post('/phone-classify/update/title',{
        id,
        title,
    });
};
