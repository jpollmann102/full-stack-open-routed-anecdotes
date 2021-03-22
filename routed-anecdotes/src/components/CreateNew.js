import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useResettableField } from '../hooks/index';

const CreateNew = (props) => {
  const contentField = useResettableField('text', 'content');
  const authorField = useResettableField('text', 'author');
  const infoField = useResettableField('text', 'info');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: contentField.value,
      author: authorField.value,
      info: infoField.value,
      votes: 0
    });
    history.push('/');
  }

  const resetFields = () => {
    contentField.reset();
    authorField.reset();
    infoField.reset();
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentField.field} />
        </div>
        <div>
          author
          <input {...authorField.field} />
        </div>
        <div>
          url for more info
          <input {...infoField.field} />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={ resetFields }>reset</button>
      </form>
    </div>
  )

}

export default CreateNew;
