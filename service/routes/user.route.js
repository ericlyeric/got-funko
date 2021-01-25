const router = require('express').Router();
const passport = require('passport');
const user_controller = require('../controllers/user.controller');

router.get(
    '/is-authenticated',
    passport.authenticate('jwt', { session: false }),
    user_controller.get_user
);

router.put(
    '/',
    passport.authenticate('jwt', { session: false}),
    user_controller.update_characters
)

module.exports = router;
