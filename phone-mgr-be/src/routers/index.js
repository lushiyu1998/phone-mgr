const auth = require('./auth');
const inviteCode = require('./invite-code');
const phone = require('./phone');

module.exports = (app) => {
    app.use(auth.routes());
    app.use(inviteCode.routes());
    app.use(phone.routes());
};