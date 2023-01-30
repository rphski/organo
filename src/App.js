//importações
import { useState } from 'react';
import Banner from './components/Banner';
import Box from './components/Box';

//setup do site
function App() {
  const [employee, setEmployee] = useState([])
  const newEmployee = (employeer) => {
    console.log(employeer)
    setEmployee([...employee, employeer])
  }

  return (
    <div className="App">
      <Banner />
      <Box toEmployeeRegistered={employeer => newEmployee(employeer)}/>
    </div>
  );
}

export default App;
