import React, {useEffect} from 'react'
import { Users } from './Components/users';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub, set} from './store/actions'


function App() {
  const users = (AMOCRM.constant("managers"));
  // const [value, setValue] = useState(2023)
  let value = 2023
  const dispatch = useDispatch()
  function handleChange(event) {
    value = event.target.value;
  }
  let store_name = useSelector(store=> store.counter)
  console.log(store_name)


  useEffect(()=>{
  }, [])
  
  
  return (
    <div className="App">
      {Object.values(users).map(element => { return (
        <Users user={element.title}/>)
      })}
      
      <input 
        value = {store_name}
        onChange={handleChange}></input>    

      {/* <div onClick={dispatch({type:"ADD"})} >Добавить</div>
      <div onClick={dispatch(sub())}>Вычесть</div>
      <div onClick={dispatch(set(value))} >Установить</div> */}
      <div>{store_name}</div>
    </div>
  );


}

export default App;
