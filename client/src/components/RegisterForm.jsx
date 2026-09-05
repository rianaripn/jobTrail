import {useState} from "react"
import {useNavigate} from "react-router-dom"
import api from "../api/axios.js"



function RegisterForm({onSwitch}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const handleRegister = async()=>{

        if(!fullname || !email || !password){
            setError('Please fill in all fields')
        }

        if(password.length<6){
            setError('Password must be at least 6 characters')
            return
        }

        if (!emailRegex.test(email)) {
            setError('Format email tidak valid!')
            return
        }

        try{
            const response = await api.post('/auth/register',{
                fullname,
                email,
                password
            })
            onSwitch()
        } catch(err){
            console.log(err.response.data)
            setError('Registration failed. Please try again.')
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-accent text-2xl font-bold">JobTrail</h2>
                <p className="text-text-secondary text-sm">Create an account to get started, its free!</p>
            </div>
            {error && <p className="bg-red-400 text-text-primary text-sm rounded-md px-2 w-fit">Try again. {error}</p>}

            <div className="flex flex-col gap-1">
                <label className="text-sm text-text-secondary">Full Name</label>
                <input
                    type='text'
                    placeholder="John Cena"
                    value={fullname}
                    onChange={(e)=>setFullname(e.target.value)}
                    className="bg-bg-elevated border border-border rounded-md p-2 text-text-primary text-sm"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-text-secondary">Email</label>
                <input
                    type='email'
                    placeholder="johncena@gmail.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="bg-bg-elevated border border-border rounded-md p-2 text-text-primary text-sm"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm text-text-secondary">Password</label>
                <input
                    type='password'
                    placeholder="*******"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="bg-bg-elevated border border-border rounded-md p-2 text-text-primary text-sm"
                />
            </div>

            <button 
                onClick={handleRegister}
                className="bg-accent text-base rounded-xl p-2 font-bold cursor-pointer">
                Create Account
            </button>
            <p className="text-sm text-text-secondary">Already have an account? {' '} 
                <span
                onClick={onSwitch}
                    className="text-accent underline cursor-pointer"
                >Sign in here!</span></p>

        </div>
    )
} 

export default RegisterForm