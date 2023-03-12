import React, {useState} from 'react'
import { Users } from './Components/users';

function App() {
  const users = (AMOCRM.constant("managers"));
  const [name, setName] = useState('fghbd')
  function handleChange(event) {
    setName(event.target.value);
  }
  
  return (
    <div className="App">
      {Object.values(users).map(element => { return (
        <Users user={element.title}/>)
      })}
      
      <input 
        value={name}
        onChange={handleChange}></input>    
        <div>{name}</div>
    </div>
  );
}

export default App;
