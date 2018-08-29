import React from 'react';

const Alert = (props) => {
  const { type, text } = props
  return (
    <div className={ `alert alert-${type}`} role="alert">
      { text }
    </div>
  )
}

export default Alert
