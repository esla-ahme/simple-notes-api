// express router: router handling requests to the server
const router = require('express').Router();
const noteController = require('../controller/noteController');

/*
 * GET all notes
 * @returns all notes 
 */
const { getAllNotes, saveNote, deleteNote, deleteAllNotes, updateNote } = noteController;

router.get('/notes', getAllNotes);
router.post('/notes/save', saveNote);
router.delete('/notes/delete/:noteId', deleteNote);
router.delete('/notes/deleteAll', deleteAllNotes);
router.put('/notes/update', updateNote);

module.exports = router

