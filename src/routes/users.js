const { Router } = require('express');
const { getUsers, postUser, getUser, updateUser, deleteUser } = require('../controllers/users.controllers');

const router = Router();

router.route('/') // la '/' representa './routes/notes'
    .get(getUsers)
    .post(postUser)

router.route('/:id')
    .get(getUser)
    // .put(updateUser)
    .delete(deleteUser)
module.exports = router