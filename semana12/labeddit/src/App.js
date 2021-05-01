import Router from './routes/router'
import { createGlobalStyle } from 'styled-components'
import "./assets/css/fonts.css";

const GlobalStyle = createGlobalStyle`

div{
margin:0;
padding:0;
}

body{
background: #eeeeee;
font-family: 'Montserrat', sans-serif;
}

button, input, textarea, select{
font-family: 'Montserrat', sans-serif;
color: #180E3B;
}

button{
background: none;
border:0
}

::placeholder{color: #180E3B;
opacity:1;
font-size:13px;
}
  
span{
padding-top: 5px;
padding-bottom:5px;
border-bottom: 1px solid #DB4472;
}


h1{
font-size:30px;
color:white;
}

}`

function App() {
return (

<div>
<GlobalStyle />
<Router/>
</div>

);
}


export default App;
