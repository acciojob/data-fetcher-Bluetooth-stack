
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios'

const App = () => {
  let [data, setData] = useState([]);
  let [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products);
        setData(response.data.products);
        if(!response.data.products){
          setErr('No data found');
          return;
        }
        setErr('');
      }
      catch (err) {
        console.log(err);
        setErr('No data found');
      }
    })();
  }, [])

  return (
    <div>
      {/* Do not remove the main div */}
      {
        data.length ?
          <div>
            <h1>Data Fetched from API</h1>
            {
              data.map(value => (
                <pre>{JSON.stringify(value, null, 4)}</pre>
              ))
            }
          </div> :!err?
          <p>Loading...</p>:<p>{err}</p>
      }
      
    </div>
  )
}

export default App
