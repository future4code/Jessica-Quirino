import React from 'react'
import HomePage from '../pages/homePage'
import UserPage from '../pages/userPage'
import PostPage from '../pages/postPage'
import LoginPage from '../pages/loginPage'
import ErrorPage from '../pages/errorPage.js'
import Header from '../components/header'
import { BrowserRouter, Switch, Route} from "react-router-dom"

function Router(){
return <div>
<BrowserRouter>
<Header/> 
<Switch>

<Route exact path="/">
<HomePage/>
</Route>
    
<Route exact path="/userPage">
<UserPage/>
</Route>

<Route exact path="/loginPage">
<LoginPage/>
</Route>


<Route exact path="/postPage/:id">
<PostPage/>
</Route>

<Route>
<ErrorPage/>
</Route>
</Switch>
</BrowserRouter>

</div>
}

export default Router