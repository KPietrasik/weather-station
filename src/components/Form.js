import React from 'react';

import './Form.css';

const Form = props => {
  return (
    <form>
      <input className="input"
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Wpisz miasto"
      />
    </form>
  )
}

export default Form


