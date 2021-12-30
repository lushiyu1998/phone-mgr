const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');

const PHONE_CONST = {
    IN: 'IN_COUNT',
    OUT: 'OUT_COUNT',
};

const Phone = mongoose.model('Phone');

const router = new Router({
    prefix: '/phone',
});

router.post('/add', async (ctx) => {
    const {
        name,
        price,
        author,
        publishDate,
        classify,
        count,
    } = getBody(ctx);

    const phone = new Phone({
        name,
        price,
        author,
        publishDate,
        classify,
        count,
    });

    const res = await phone.save();

    ctx.body = {
        data: res,
        code: 1,
        msg: '添加成功',
    };
});

router.get('/list', async (ctx) => {
    // https://aa.cc.com/user?page=2&size=20&keyword=手机名#fdsafds
    const {
        page = 1,
        keyword = '',
    } = ctx.query;

    let = {
        size = 10,
    } = ctx.query;

    size = Number(size);

    const query = {};

    if (keyword) {
        query.name = keyword;
    }

    const list = await Phone
        .find(query)
        .skip((page - 1) * size)
        .limit(size)
        .exec();

    const total = await Phone.countDocuments();

    ctx.body = {
        data: {
            total,
            list,
            page,
            size,
        },
        code: 1,
        msg: '获取列表成功',
    };
});

router.delete('/:id',async (ctx) => {
    const {
        id
    } = ctx.params;
    
    const delMsg = await Phone.deleteOne({
       _id: id, 
    });

    ctx.body = {
        data: delMsg,
        msg: '删除成功',
        code: 1,
    };
});

router.post('/update/count', async (ctx) => {
    const {
        id,
        type,
    } = ctx.request.body;

    let {
        num,
    } = ctx.request.body;

    num = Number(num);

    const phone = await Phone.findOne({
        _id: id,
    }).exec();

    if (!phone) {
        ctx.body = {
            code: 0,
            msg: '没有找到此手机,换个试试',
        };

        return;
    }

    //找到了手机
    if (type === PHONE_CONST.IN) {
        //入库
        num = Math.abs(num);
    } else {
        //出库
        num = -Math.abs(num);
    }

    phone.count = phone.count + num;

    if (phone.count < 0) {
        ctx.body = {
            code: 0,
            msg: '没有那么多，太贪心啦',
        };
        return;
    }

    const res = await phone.save();

    ctx.body = {
        data: res,
        code: 1,
        msg: '操作成功'
    };
});

router.post('/update', async (ctx) => {
    const {
        id,
        ...others
    } = ctx.request.body;

    const one = await Phone.findOne({
        _id: id,
    }).exec();

    //没有找到手机
    if (!one) {
        ctx.body = {
            msg: '没有找到手机',
            code: 0,
        }
        return;
    }

    //找到了手机
    const newQuery = {};
    Object.entries(others).forEach(([key, value]) => {
        if (value) {
            newQuery[key] = value;
        }
    });

    Object.assign(one, newQuery);

    const res = await one.save();

    ctx.body = {
        data: res,
        code: 1,
        msg : '保存成功',
    };
});

module.exports = router;
