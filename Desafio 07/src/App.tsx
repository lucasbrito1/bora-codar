import React, { useState } from 'react';
import { BLOCOS } from "./components/Utils";
import Hero from "./components/hero/Hero";
import Content from "./components/content/Content";

function App() {
  const [resultado, setResultado] = useState(BLOCOS);

  return (
    <>
      <Hero resultado={resultado} setResultado={setResultado} />
      <Content resultado={resultado} />
    </>
  )
}

export default App
