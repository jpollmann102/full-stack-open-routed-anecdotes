import React from 'react';
import { Link } from 'react-router-dom';

const AnecdoteLink = ({ anecdote }) => {
  return (
    <li key={anecdote.id} >
      <Link to={`/anecdotes/${anecdote.id}`}>
        {anecdote.content}
      </Link>
    </li>
  )
}

export default AnecdoteLink;
