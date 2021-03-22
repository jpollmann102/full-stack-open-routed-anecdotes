import React, { useState } from 'react'
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Notification from './components/Notification';
import CreateNew from './components/CreateNew';
import AnecdoteList from './components/AnecdoteList';
import Anecdote from './components/Anecdote';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const routeMatch = useRouteMatch('/anecdotes/:id');

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote ${anecdote.content} created!`);
    setTimeout(() => {
      setNotification('');
    }, 10000);
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const matchedAnecdote = () => {
    if(routeMatch)
    {
      return anecdoteById(routeMatch.params.id);
    }else return undefined;
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification message={ notification }/>
      <Switch>

        <Route path="/create">
          <CreateNew addNew={addNew} />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/anecdotes/:id">
          <Anecdote anecdote={ matchedAnecdote() } />
        </Route>

        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>

      </Switch>
      <Footer />
    </div>
  )
}

export default App;
