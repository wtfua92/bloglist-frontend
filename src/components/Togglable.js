import React, { useState, useImperativeHandle } from 'react';

const Togglable = React.forwardRef(({ children, buttonText }, ref) => {
  const [visible, setVisible] = useState(false);
  const showWhenVisible = {
    display: visible ? '' : 'none'
  };
  const hideWhenVisible = {
    display: visible ? 'none' : ''
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => ({
    toggleVisibility
  }));

  return (
    <div>
      <div>
        <button type="button" style={hideWhenVisible} onClick={toggleVisibility}>{buttonText}</button>
        <div style={showWhenVisible}>
          {children}
          <button type="button" onClick={toggleVisibility}>Cancel</button>
        </div>
      </div>
    </div>
  );
});

export default Togglable;