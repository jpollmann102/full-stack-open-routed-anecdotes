import React from 'react';

const Notification = ({ message }) => {

  const style = {
    display: message === '' ? 'none' : ''
  };

  return (
    <p>{ message }</p>
  )
}

export default Notification;
