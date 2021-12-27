require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Phone');

const mongoose = require('mongoose');

const connect = () => {
    return new Promise((resolve) => {
        //去连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/phone-mgr');

        //当数据库连接时做一些事情
        mongoose.connection.on('open', () => {
            console.log('连接数据库成功');

            resolve();
        });
    });
};

module.exports = {
    connect,
};
