import React, { useState } from 'react';
import TshirtForm from './components/TshirtForm';
import TshirtDetail from './components/TshirtDetail';

const App = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [isTshirtAdded, setIsTshirtAdded] = useState(false);

  const addTshirt = (newTshirt) => {
    setTshirtData([...tshirtData, newTshirt]);
    setIsTshirtAdded(true);
  };

  return (
    <div>
      <TshirtForm addTshirt={addTshirt} />
      <TshirtDetail tshirtData={tshirtData} isTshirtAdded={isTshirtAdded} />
    </div>
  );
};

export default App;
