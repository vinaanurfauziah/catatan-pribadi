import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import { getData } from '../utils/data';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      archivedNotes: [],
      keyword: '',
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  onKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const notesAfterDelete = this.state.notes.filter(note => note.id !== id);
    const archivedAfterDelete = this.state.archivedNotes.filter(note => note.id !== id);
    this.setState({
      notes: notesAfterDelete,
      archivedNotes: archivedAfterDelete
    });
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.filter(note => note.id !== id);
    const archivedNote = this.state.notes.find(note => note.id === id);
    archivedNote.archived = true;
    this.setState({ notes: updatedNotes, archivedNotes: [...this.state.archivedNotes, archivedNote] });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    });

    return (
      <div className="note-app">
        <h1>Aplikasi Catatan Pribadi</h1>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Cari catatan" value={this.state.keyword} onChange={this.onKeywordChange} />
        </div>
        <h2>Buat Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>
          <p>Arsip</p>
        </h2>
        <NoteList notes={this.state.archivedNotes} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }
}

export default NoteApp;