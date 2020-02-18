"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUSer = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUSer.email, iss: 'meat-app' }, api_config_1.apiConfig.secret);
        return resp.json({ name: dbUSer.name, email: dbUSer.email, accessToken: token });
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
