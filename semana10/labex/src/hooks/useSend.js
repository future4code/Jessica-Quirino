
import React, {useState, useEffect}  from 'react'
import axios from 'axios'


const useSend = (url, initialState) => {
    const [data, setData] = useState(initialState)
cont [body, setBody] = useState(initialState)

useEffect(() => {
   axios
   .get(url)
   .then((res) =>{console.log(res.data)
setData(res.data)})
   .catch((err) => {console.log(err.data)})

  }, [url]);

  return data

}

export default useSend