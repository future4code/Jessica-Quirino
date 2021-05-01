
import FormLogin from '../components/formLogin'
import useUnProtectedPage from '../hooks/useProtectedPageNo'

const LoginPage = () => {

useUnProtectedPage()

return (

<div> 
<FormLogin />
</div>
)

}

export default LoginPage
    