import { useState } from "react"
import AuthLayout from "../components/AuthLayout"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

function AuthPage(){
    const [isLogin, setIsLogin] = useState(true)

    return (
        <AuthLayout>
            {isLogin ? <LoginForm/> : <RegisterForm/>}
        </AuthLayout>
    )
}

export default AuthPage