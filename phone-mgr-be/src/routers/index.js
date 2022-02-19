const auth = require('./auth');
const inviteCode = require('./invite-code');
const phone = require('./phone');
const inventoryLog = require('./inventory-log');
const user = require('./user');
const character = require('./character');
const log = require('./log');
const forgetPassword = require('./forget-password');
const PhoneClassify = require('./phone-classify');

module.exports = (app) => {
    app.use(auth.routes());
    app.use(inviteCode.routes());
    app.use(phone.routes());
    app.use(inventoryLog.routes());
    app.use(user.routes());
    app.use(character.routes());
    app.use(log.routes());
    app.use(forgetPassword.routes());
    app.use(PhoneClassify.routes());
};
