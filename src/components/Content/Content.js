import React, {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

const Content = ({value, change, submit}) => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <form onSubmit={submit}>
      <input ref={inputRef}
             type="text"
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