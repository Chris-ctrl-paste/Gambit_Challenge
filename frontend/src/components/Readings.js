import React, {useState, useEffect, useCallback} from 'react';
import '../css/Readings.css';
import axios from 'axios'

function Readings() {
  let [responseData, setResponseData] = useState('');
  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:9000",
   
    })
    .then((response) => {
      setResponseData(response.data)
    //  console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])



  return (
    <div className="text">
      <header className="App_header">
        <h1>
          Reading Data
        </h1>
     
      </header>
      {
        Object.keys(responseData).map((key, i) => (
          
          <p className="underLine" key={i}>
            
            <span className="white"> {key} </span>
            
            <span className="red"> {responseData[key] + ""  }</span>
           
          </p>
            )
          )
        }
    </div>
  );
}



export default Readings












