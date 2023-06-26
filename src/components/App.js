
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios'

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        // console.log(response.data.products);
        setData(response.data.products);
      }
      catch (err) {
        console.log(err);
      }
    })();
  }, [data])

  return (
    <div>
      {/* Do not remove the main div */}
      {
        data.length ?
          <div>
            <h1>Data Fetched from API</h1>
            {
              data.map(value => (
                <pre>{JSON.stringify(value)}</pre>
              ))
            }
          </div> :
          <p>Loading...</p>
      }
    </div>
  )
}

export default App
