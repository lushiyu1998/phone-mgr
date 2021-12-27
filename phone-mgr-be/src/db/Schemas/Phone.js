const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const PhoneSchema = new mongoose.Schema({
    //手机名
    name: String,
    //价格
    price: Number,
    //品牌
    author: String,
    //发售日期
    publishDate: String,
    //分类
    classify: String,
    //库存
    count: Number,

    meta: getMate(),
});

mongoose.model('Phone', PhoneSchema);
