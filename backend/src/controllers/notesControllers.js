import Note from "../models/Note.js";
export async function getAllNotes (req, res)  {
try {
    const notes = await Note.find()
    res.status(200).json(notes);
  }  catch (error) {
    console.error("Errorin getAllNotes:", error);
res.status(500).json({ message: "internal Server Error" });
}
}    

export async function createNote (req, res)  {
   try {
    const {title,content} = req.body;
    const newNote = new Note({title, content});
    
    await newNote.save();
    res.status(201).json({ message: "note created successfully" });
   } catch (error) {
    console.error("Error in createNote:", error);
res.status(500).json({ message: "internal Server Error" });
    
   } 
}

export async function updateNote (req, res)  {
  res.status(200).json({ message: "note updated successfully" });
}

export async function deleteNote (req, res)  {
  res.status(200).json({ message: "note deleted successfully" });
}   