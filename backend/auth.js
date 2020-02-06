"use strict";
exports.__esModule = true;
var users_1 = require("./users");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUSer = users_1.users[user.email];
        return resp.json({ name: dbUSer.name, email: dbUSer.email });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUSer = users_1.users[user.email];
    return dbUSer !== undefined && dbUSer.matches(user);
}
