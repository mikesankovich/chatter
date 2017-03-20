var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');

const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session: false}); //token based, not session

const Group = require('../controllers/group');
router.get('/api/', requireAuth, Group.getGroups);
router.get('/api/getgroup/:id', requireAuth, Group.getGroup);
router.post('/api/newmessage/:id', requireAuth, Group.newMessage);
router.post('/api/newgroup', requireAuth, Group.newGroup);

module.exports = router;
