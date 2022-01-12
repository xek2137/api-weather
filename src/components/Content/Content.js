import React from "react";
import PropTypes from 'prop-types';

const Content = ({value, change, submit}) => {
  return (
    <form onSubmit={submit}>
      <input type="text"
             value={value}
             placeholder="Search city"
             onChange={change}
      />
      <button>Search</button>
    </form>
  )
}

Content.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Content;