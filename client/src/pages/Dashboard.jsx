import {useState, useEffect} from 'react'
import api from '../api/axios.js'
import Sidebar from '../components/Sidebar.jsx'
import StatsCard from '../components/StatsCard.jsx'
import StatusBar from '../components/StatusBar.jsx'

function Dashboard(){
    const [jobs, setJobs] = useState([])

    const activeJobs = jobs.filter(job=>{
        return job.status !== 'rejected' && job.status !== 'offering'
    }).length

    const offersJobs = jobs.filter(job=>{
        return job.status === 'offering'
    }).length

    const rejectJobs = jobs.filter(job=>{
        return job.status === 'rejected'
    }).length

    const statusList = [
        { label: 'Applied', status: 'applied', color: 'bg-blue-400' },
        { label: 'HR Interview', status: 'hr_interview', color: 'bg-amber-400' },
        { label: 'Psikotest', status: 'psikotest', color: 'bg-purple-400' },
        { label: 'User Interview', status: 'user_interview', color: 'bg-orange-400' },
        { label: 'Offering', status: 'offering', color: 'bg-green-400' },
        { label: 'Rejected', status: 'rejected', color: 'bg-red-400' },
    ]

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
            <div className='px-12 py-4 flex flex-col flex-1 gap-4'>
                <h1 className='text-text-primary font-bold'>Welcome, User!</h1>
                <main className="flex flex-col gap-4 w-full ">
                    <div className='flex gap-10 justify-between'>
                        <StatsCard
                            title="Total Application"
                            value={jobs.length}
                            color="border-l-accent"
                            colorAccent="text-accent"
                        />
                        <StatsCard
                            title="Active Application"
                            value={activeJobs}
                            color="border-l-blue-400"
                            colorAccent="text-blue-400"
                        />
                        <StatsCard
                            title="Offers"
                            value={offersJobs}
                            color="border-l-green-400"
                            colorAccent="text-green-400"
                        />
                        <StatsCard
                            title="Rejected"
                            value={rejectJobs}
                            color="border-l-red-400"
                            colorAccent="text-red-400"
                        />
                    </div>
                    <div className='flex bg-bg-elevated border px-5 border-border rounded-md w-full'>
                        <div className='flex flex-col p-4 w-full gap-4' >
                            <h1 className='text-text-primary text-xl'>Status Breakdown</h1>
                            <div className='flex flex-col gap-2'>
                                {statusList.map(item=>{
                                    const count = jobs.filter(j=> j.status === item.status).length
                                    const percentage = (count/jobs.length) *100
                                    console.log(item.label, count, percentage)
                                    return (
                                        <StatusBar 
                                            key={item.status}
                                            label={item.label}
                                            color={item.color}
                                            count={count}
                                            percentage={percentage}
                                        />
                                    )
                                })}

                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard