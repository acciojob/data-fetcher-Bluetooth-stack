
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios'

const App = () => {
  let [data, setData] = useState({});
  let [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data);
        setData(response.data);
        if (!response.data) {
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
        data ?
          <div>
            <h1>Data Fetched from API</h1>
            {
                <pre>{JSON.stringify(data, null, 3)},</pre>
            }
          </div> : !err ?
            <p>Loading...</p> : <p>{err}</p>
      }

    </div>
  )
}

export default App
