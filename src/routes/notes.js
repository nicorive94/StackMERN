const { Router } = require('express');
const { getNotes, postNote, updateNote, deleteNote, getNote } = require('../controllers/notes.controllers');
const router = Router();


router.route('/') // la '/' representa './routes/notes'
    .get(getNotes)
    .post(postNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router