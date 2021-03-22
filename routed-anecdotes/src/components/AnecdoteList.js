import React from 'react';
import AnecdoteLink from './AnecdoteLink';

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      { anecdotes.map(
          anecdote => <AnecdoteLink key={anecdote.id} anecdote={anecdote} />
        )
      }
    </ul>
  </div>
)

export default AnecdoteList;
