const User = require('../models/user.model');
const { signToken } = require('../utils/auth');

exports.auth_register = function (req, res) {
    const { username, password } = req.body;
    User.findOne({ username }, function (err, user) {
        if (err) {
            exports.status(500).json({
                message: { 
                    body: 'Error has occured', 
                    error: true 
                }
            });
        }
        if (user) {
            res.status(400).json({
                message: {
                    body: 'Username is already taken',
                    error: true,
                }
            })
        } else {
            const newUser = new User({ username, password });
            newUser.save(function (err) {
                if (err) {
                    res.status(500).json({
                        message: {
                            body: `Error ${err}`,
                            error: true
                        }
                    });
                } else {
                    res.status(201).json({
                        message: {
                            body: 'Account successfully created',
                            error: false
                        }
                    })
                }
            })
        }
    })
}

exports.auth_login = function (req, res, next) {
    const { _id } = req.user;
    const token = signToken(_id);
    res.cookie('access_token', token, {
        httpOnly: true,
        sameSite: true
    });
    next();
}

exports.auth_logout = function (req, res) {
    res.clearCookie('access_token');
    res.json({
        user: {
            id: '',
            name: '',
            characters: [],
            isAuthenticated: false
        },
        success: true
    })
}