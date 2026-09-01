import {useState} from "react"
import {useNavigate} from "react-router-dom"
import api from "../api/axios.js"

function LoginForm({onSwitch}){
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigate = useNavigate()
    const [error, setError]=useState('')

    const handleLogin = async()=>{
        if(!email || !password){
            setError('Please fill in all fields')
            return
        }

        try{
            const response = await api.post('/auth/login',{
                email,
                password
            })

            localStorage.setItem('token',response.data.token)

            navigate('/dashboard')

        }catch(err){
            console.log(err.response.data)
            setError('Email or password is incorrect')
        }

    }
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-accent text-2xl font-bold">JobTrail</h2>
                <p className="text-text-secondary text-sm">Welcome back. Sign in to continue.</p>
            </div>
            {error && <p className="bg-red-400 text-text-primary text-sm rounded-md px-2 w-fit">Try again. Email or password is incorrect!</p>}
            <div className="flex flex-col gap-2">
                <label className="text-text-secondary text-sm">Email</label>
                <input
                    type="email" 
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="bg-bg-elevated text-text-primary text-sm p-2 rounded-md border border-border"
                />    
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-text-secondary">Password</label>
                <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="bg-bg-elevated text-text-secondary text-sm p-2 rounded-md border border-border"
                />
            </div>
            <button 
                onClick={handleLogin}
                className="bg-accent text-base rounded-xl text-shadow-text-secondary text-black p-2 cursor-pointer"
            >
                Submit
            </button>
            <p className="text-text-secondary text-sm">
                Dont have an account? {' '}
                <span 
                onClick={onSwitch}
                className="text-accent underline cursor-pointer">
                    Create one</span>
            </p>
        </div>
    )
}

export default LoginForm