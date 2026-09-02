import {useState, useEffect} from 'react'
import api from '../api/axios.js'
import Sidebar from '../components/Sidebar.jsx'
import StatsCard from '../components/StatsCard.jsx'

function Dashboard({title, value, color}){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        const fetchJobs = async()=>{
            const response = await api.get('/jobs')
            setJobs (response.data)
        }
        fetchJobs()
    }, [])

    return(
        <div className= "h-screen flex gap-4">
            <Sidebar />
            <main className="px-12 py-4 flex flex-col gap-4 bg-bg-base">
                <h1 className='text-text-primary font-bold '>Welcome, User!</h1>
                <div className='flex gap-4 justify-around'>
                    <StatsCard
                        title="Total Application"
                        value={jobs.length}
                        color="border-l-accent"
                        colorAccent="text-accent"
                    />
                    <StatsCard
                        title="Active"
                        value="0"
                        color="border-l-blue-400"
                        colorAccent="text-blue-400"
                    />
                    <StatsCard
                        title="Offers"
                        value="0"
                        color="border-l-green-400"
                        colorAccent="text-green-400"
                    />
                    <StatsCard
                        title="Rejected"
                        value="0"
                        color="border-l-red-400"
                        colorAccent="text-red-400"
                    />
                </div>

            </main>
            
        </div>
    )
}

export default Dashboard