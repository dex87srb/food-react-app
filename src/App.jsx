
import React, { useState } from 'react'
import "./scss/general.scss";
import Header from './containers/Header';
import Auks from './hoc/Auks';
import Main from './containers/Main'


function App() {

  const [value, setValue] = useState(0);

  const sendDataToParent = (index) => {

    setValue((value + index.length) - value);

  };


  return (
    <Auks>
      <Header count={value} />
      <Main Counter={sendDataToParent} />
    </Auks>
  );
}

export default App;
