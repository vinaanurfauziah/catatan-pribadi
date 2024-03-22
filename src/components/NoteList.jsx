import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div className='note-list'>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <div className="note-item__body1">
            <h3 className="note-item__title">{note.title}</h3>
            <p className="note-item__body">{note.body}</p>
            <p className="note-item__createdAt">{note.createdAt}</p>
            <button className="note-item__delete" onClick={() => onDelete(note.id)}>
              Hapus
            </button>
            <button className="note-item__archive" onClick={() => onArchive(note.id)}>
              Arsip
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;