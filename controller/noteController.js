const generator = require('../util/notesIds')
const storage = require('../util/noteStorage')
const model = require('../model/noteModel')

/**
 * Retrieves all notes from the database.
 * 
 * @description This API endpoint receives a GET request to retrieve all notes from the database.
 * GET /notes
*/
const getAllNotes = (req, res) =>
{   
    
    const notes = storage.getValues(storage.store)
    if (!notes){
        res.status(404).send({ status: "error", message: "no notes found" })
        return
    }
    if (notes.length === 0) {
        res.status(200).send({ status: "ok", message: "you have no notes yet" })
        return
    }
    res.send({ status: "ok", message: "notes retrieved", notes })

}
/**
 * Saves a note to the database.
 *
 * @description This API endpoint receives a POST request to save a note to the database. 
 * POST /notes/save
 * The request body should contain the following properties:
 *   - title: The title of the note.
 *   - content: The content of the note.
 *   - createdBy: The creator of the note.
 */

const saveNote = (req, res) => {

    const { title, content, createdBy } = req.body
    if(!title || !content || !createdBy){
        res.status(400).send({status:"error",message:"title, content and createdBy are required"})
        return
    }
    const noteId = generator.generate()
    const createdTime = new Date()
    const note = new model(noteId, title, content, createdBy, createdTime)
    storage.store.setItem(noteId, note)
    res.send({status:"ok",message:"note saved",note})
}


/**
 * Update a note to the database.
 *
 * @description This API endpoint receives a PUT request to update a note .
 *   The request body should contain the following properties:
 *   - noteId: The ID of the note.
 *   - title: The title of the note.
 *   - content: The content of the note.
 *   PUT /notes/update
 */

const updateNote = (req, res) => {
  // TODO: update note in the database
  const {noteId, title, content} = req.body
  if(!noteId){
    res.status(400).send({status:"error",message:"noteId is required"})
    return
  }
  const note = storage.store.getItem(noteId)
  if(!note){
    res.status(404).send({status:"error",message:"note not found"})
    return
  }
  
  title && (note.title = title)
  content && (note.content = content)
  storage.store.setItem(noteId, note)
  res.status(200).send({
    status:"ok",
    message:"note updated",
    note
  })
};

/*
* @description This API endpoint receives a DELETE request to delete a note .
* DELETE /notes/delete/:noteId
*/

const deleteNote = (req, res) => {
    // TODO: delete note from the database
    const {noteId} = req.params
    if(!noteId){
        res.status(400).send({status:"error",message:"noteId is required"})
        return
    }
    const note = storage.store.getItem(noteId)
    if(!note){
        res.status(404).send({status:"error",message:"note not found"})
        return
    }
    storage.store.removeItem(noteId)
    res.status(200).send({
        status:"ok",
        message:"note deleted"})
}

// use with caution
/**
 * @description This API endpoint receives a DELETE request to delete all notes .
 * DELETE /notes/deleteAll
 */
const deleteAllNotes = (req, res) => {
    storage.store.clear()
    res.status(200).send({
        status:"ok",
        message:"all notes deleted"})
}



module.exports = {
    getAllNotes,
    saveNote,
    deleteNote,
    deleteAllNotes,
    updateNote
}