const notesController = {};
const Note = require('../models/Note')

notesController.getNotes = async (req, res)=>{
    const notes = await Note.find(); // esto devuelve un arreglo con las notas de la DB
    res.json(notes)
}

notesController.postNote = async (req, res)=>{
    const { title, content, author, date} = req.body;
    const newNote = new Note({
        title: title,
        content: content, 
        author: author,
        date: date
    })
    await newNote.save()
    console.log(newNote);
    res.json({messaje: 'Nota Guardada'})
}

notesController.updateNote = async (req, res)=>{
    const{ title, content, author } = req.body;
    const newNote = await Note.findByIdAndUpdate(req.params.id, {
        title: title,
        content: content,
        author: author
    })
    res.json({title: "nota actualizada"})
    
}

notesController.deleteNote = async (req, res)=>{
    const note = await Note.findByIdAndDelete(req.params.id)
    res.json({messaje: 'Nota eliminada'})
}

notesController.getNote = async (req, res)=>{
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json(note)
}

module.exports = notesController