import React from 'react'

function Alert(props) {
  const Capitaliz = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{Capitaliz(props.alert.type)}</strong>: {Capitaliz(props.alert.msg)}
    </div>
  )
}

export default Alert
