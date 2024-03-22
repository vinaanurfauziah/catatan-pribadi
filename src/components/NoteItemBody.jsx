import React from 'react';

function NoteItemBody({ title, body, archived, createdAt }) {
  return (
    <div className="note-item__body1">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__body">{body}</p>
      <p className="note-item__archived">{archived}</p>
      <p className="note-item__createdAt">{createdAt}</p>
    </div>
  );
}

export default NoteItemBody;