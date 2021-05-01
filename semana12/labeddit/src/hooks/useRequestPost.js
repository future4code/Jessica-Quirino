import React, {useEffect}  from 'react'
import axios from 'axios'

const useRequestPost = (url, body, headers) => {

useEffect(() => {
axios
.post(url,body,{headers})
.then((res) =>
{console.log(window.alert("Envio Concluído!"))
body(res.data);}
)
.catch((err) => 
{console.log(err.data)}
)}, [body]);
}
export default useRequestPost