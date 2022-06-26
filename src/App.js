import React, { useRef, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const timeoutId = useRef(null);

  function handleChange(e) {
    setValue(e.target.value);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      console.log(value);
    }, 3000);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
