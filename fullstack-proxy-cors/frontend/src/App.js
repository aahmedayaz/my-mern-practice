import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
   axios.get('http://localhost:4001/jokes')
   .then((res) => {
      setJokes(res.data)
   }) 
   .catch((err) => {
    console.log(err)
   })
  })

  return (
    <>
      <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <h1>Motivational Sayings</h1>
        <div>Jokes: {jokes.length}</div>
        <ul>
          {
            jokes.map((joke) => {
              return <li key={joke.id}>{joke.saying}</li>
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
