import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data);
      // we dont have to convert the response in json , as axios looks after it 
    })
    .catch((e)=>{
      console.log("Error is : ",e);
    })
  },[]);

  return (
    <>
      <div>
        <h1>Hello Frontend , hii nodemon</h1>
        <p> JOKES : {jokes.length} </p>
        

        {/* keys are special props used by react to keep track of which components are added , removed , or changed within a list , it helps react identify which elements corresponds to which components especially when the list is updated */}

        { 
          jokes.map((joke)=>{
            return(
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            );  
          })
        }
       </div>
    </>
  )
}

export default App

