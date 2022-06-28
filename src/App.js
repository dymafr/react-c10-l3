import React, { useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  {
    return <input ref={ref} className="m-10" type="text" />;
  }
});

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <input ref={inputRef} className="m-10" type="text" />
      <button className="btn btn-primary" onClick={handleClick}>
        Focus champ
      </button>
    </div>
  );
}

export default App;
