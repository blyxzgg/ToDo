import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import AddNoteBtn from "./widgets/AddNoteBtn/AddNoteBtn";
import Main from "./widgets/Main/Main";
import Modal from "./widgets/Modal/Modal";
import NavBar from "./widgets/NavBar/NavBar";


const App = () => {
  const [searchMode, setSearchMode] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [gridMode, setGridMode] = useState(true)
  const [showModel, setShowModel] = useState(false)
  const [notes, setNotes] = useState([])

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [editMode, setEditMode] = useState(false)
  const [pickedNoteId, setPickedNoteId] = useState(null)

  useEffect(() => {
    const localData = localStorage.getItem('notes')
    if (localData) {
      setNotes([...JSON.parse(localData)]);
    }
  }, []);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: title ? title : 'Нет загаловка',
      note: note ? note : 'Нет заметки',
      date: new Date().toLocaleDateString(),
    }
    setTitle('')
    setNote('')
    const allNotes = [...notes, newNote]
    localStorage.setItem('notes', JSON.stringify([...allNotes]))
    setNotes([...allNotes])
    setShowModel(false)
  }

  const closeModal = () => {
    setShowModel(false)
    setEditMode(false)
  }

  const showEditNoteModal = (id) => {
    setPickedNoteId(id)
    setShowModel(true)
    setEditMode(true)
  }

  const editNote = () => {
    if (pickedNoteId) {
      const pickedNoteIndex = notes.findIndex(note => note.id == pickedNoteId)
  
      notes[pickedNoteIndex] = {
        id: pickedNoteId,
        title: title ? title : 'Нет загаловка',
        note: note ? note : 'Нет заметки',
        date: new Date().toLocaleDateString(),
      }
      const allNotes = [...notes]
      localStorage.setItem('notes', JSON.stringify([...allNotes]))
      setNotes([...allNotes])
      setTitle('')
      setNote('')
      closeModal()
    }
  }

  const removeNote = (id) => {
    const pickeNoteIndex = notes.findIndex(note => note.id == id)
    notes.splice(pickeNoteIndex, 1);
    const allNotes = [...notes]
    localStorage.setItem('notes', JSON.stringify([...allNotes]))
    setNotes([...allNotes])
  }

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(inputValue.toLowerCase()))

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} inputValue={inputValue} setInputValue={setInputValue} />
      <Main gridMode={gridMode} setGridMode={setGridMode} notes={filteredNotes} removeNote={removeNote} showEditNoteModal={showEditNoteModal} />
      <Modal showModel={showModel} setShowModel={closeModal} addNote={addNote} title={title} note={note} setTitle={setTitle} setNote={setNote} editMode={editMode} editNote={editNote} />
      <AddNoteBtn setShowModel={setShowModel} showModel={showModel} />
    </>
  );
};
export default App;
