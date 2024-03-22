import React from 'react';
import NoteItemBody from './NoteItemBody';

function NoteItem({
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchive,
  id,
}) {
  return (
    <div className='note-item'>
      <NoteItemBody
        title={title}
        body={body}
        archived={archived}
        createdAt={createdAt}
      />
      <div className='note-item__actions'>
        <button className='note-item__delete' onClick={() => onDelete(id)}>
          Hapus
        </button>
        <button
          className='note-item__archive btn-archive'
          onClick={() => onArchive(id)}>
          Archive
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
