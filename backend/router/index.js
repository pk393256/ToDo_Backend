const express = require('express');
const { auth } = require('../authorization/auth');
const { login } = require('../handler/login');
const { createNote, getAllUserNote, getAllUserNotePopulate, deleteUserNote, updateUserNote } = require('../handler/note');
const { createUser, getAllUser } = require('../handler/user');
const app = express();
const router = express.Router();

router.post('/user',createUser);
router.get('/user',getAllUser);
router.post('/login',login);
router.get('/note',auth,getAllUserNote);
router.post('/note',auth,createNote);
router.get('/notePopulate',auth,getAllUserNotePopulate)
router.delete('/note/:_id',auth,deleteUserNote)
router.patch('/note/:_id',auth,updateUserNote)

module.exports = router;
