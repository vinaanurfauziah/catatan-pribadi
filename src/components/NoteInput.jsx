import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      titleCharCount: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    const titleCharCount = 50 - title.length;
    this.setState(() => {
      return {
        title,
        titleCharCount,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <input
          type='text'
          placeholder='Title'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={50}
        />
        <p className='note-input__title-char-count'>
          {this.state.titleCharCount} characters remaining
        </p>
        <input
          type='text'
          placeholder='Body'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type='submit'>Buat</button>
      </form>
    );
  }
}export default NoteInput;