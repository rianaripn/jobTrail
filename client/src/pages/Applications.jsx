import Sidebar from "../components/Sidebar"
import { useState, useEffect } from "react"
import api from '../api/axios.js'

function Applications(){
    const [jobs, setJobs] = useState([])
    const [isDrawerOpen , setIsDrawerOpen] = useState(false)
    const [formData, setFormData] = useState({})
    const [selectedJob, setSelectedJob] =useState(null)

    const handleDelete = async(id)=>{
        await api.delete(`/jobs/${id}`)
        setJobs(jobs.filter(job =>job.id !==id))
    }

    const handleEdit = (job)=>{
        setSelectedJob(job)
        setFormData({
            company: job.company,
            position: job.position,
            status: job.status,
            applied_date: job.applied_date,
            deadline: job.deadline,
            source: job.source,
            job_url: job.job_url,
            notes: job.notes 
        })
        setIsDrawerOpen(true)
    }

    useEffect(()=>{
        const fetchJobs = async()=>{
            const response = await api.get('/jobs')
            setJobs(response.data)
        }
        fetchJobs()
    },[])

    return(
        <section className="flex">
            <Sidebar/>
            <div className="flex flex-col px-12 py-4 gap-4">
                <h1 className="text-text-primary text-2xl font-bold">My Application</h1>
                <div className="flex gap-3">
                    <select className="text-text-primary  bg-bg-elevated border border-border rounded-md px-4 py-1 text-sm cursor-pointer">
                        <option value="All">All Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Hr">HR Interview</option>
                        <option value="User">User Interview</option>
                        <option value="Psikotest">Psikotest</option>
                        <option value="Offering">Offering</option>
                        <option value="Rejected">Rejected</option>    
                    </select> 
                    <button className="bg-accent px-4 py-1 rounded-md font-medium cursor-pointer text-sm">+ Add Application</button>
                </div>
                <table className="w-full table-fixed bg-bg-elevated border-separate border-spacing-x-2 border-border">
                    <thead className="px-2">
                        <tr className="text-text-secondary text-sm border-border border-b ">
                            <th className="text-left p-2">Company</th>
                            <th className="text-left py-2">Position</th>
                            <th className="text-left py-2">Status</th>
                            <th className="text-left py-2">Applied Date</th>
                            <th className="text-left py-2">Notes</th>
                            <th className="text-left py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job=>{
                            return (
                                <tr key={job.id}>
                                    <td className="p-2 text-text-primary text-sm">{job.company}</td>
                                    <td className="py-2 text-text-primary text-sm">{job.position}</td>
                                    <td className="py-2 text-text-primary text-sm">{job.status}</td>
                                    <td className="py-2 text-text-primary text-sm">{new Date (job.applied_date).toLocaleDateString()}</td>
                                    <td className="py-2 text-text-primary text-sm">{job.notes === '' ? '-' : job.notes }</td>
                                    <td className="flex gap-2 text-center my-2">
                                        <button 
                                            onClick={()=>handleDelete(job.id)}
                                            className="text-sm text-text-primary bg-red-400 rounded-md px-2 cursor-pointer">Delete</button>
                                        <button 
                                            onClick={()=>handleEdit(job)}
                                            className="text-sm text-text-primary bg-green-400 rounded-md px-2 cursor-pointer">Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 flex justify-end ">
                    <div 
                        onClick={()=>setIsDrawerOpen(false)}
                        className="absolute inset-0 bg-bg-base/40">
                    </div>
                    <div className="relative bg-bg-surface w-96 h-full p-6 flex flex-col gap-4 overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-text-primary font-bold">Edit Application</h2>
                            <button
                                className="text-text-muted cursor-pointer px-2 rounded-md"
                                onClick={()=>setIsDrawerOpen(false)}
                            >X</button>
                        </div>
                    </div>

                </div>
            )}

        </section>
    )
}

export default Applications