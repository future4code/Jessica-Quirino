import React, {useEffect}  from 'react'
import axios from 'axios'

const useRequestPut = (url, body, headers) => {

useEffect(() => {
axios
.put(url,body,{headers})
.then((res) =>
{console.log(window.alert("Envio Concluído!"))
body(res.data);}
)
.catch((err) => 
{console.log(err.data)}
)}, [body]);
}
export default useRequestPut