import React, { useState } from "react";

function App() {
  const [data, setData]: any = useState();

  const handleBlur = (e: any) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        onBlur={(e) => {
          handleBlur(e);
        }}
      />
      {data}
    </div>
  );
}

export default App;
