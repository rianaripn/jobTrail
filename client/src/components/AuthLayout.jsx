function AuthLayout(){
    return(
        <div className="flex flex-row">
            <div className="w-1/2 h-screen bg-bg-surface flex flex-col justify-center px-8 gap-2">
                <h2 className="text-text-primary text-3xl font-bold">Jobtrail</h2>
                <h3 className="text-text-white text-4xl italic">Track every step of your journey to your dream job.</h3>
                <p className="text-text-muted">A calm, organized home for every application — no more spreadsheets.</p>
            </div>
            <div className="w-1/2 h-screen bg-bg-base flex flex-col justify-center px-8 gap-4">
                <div>
                    <h2 className="text-text-white font-bold text-3xl">JobTrail</h2>
                    <p className="text-text-muted">Welcome back. Sign in to continue.</p>
                </div>
                <div>
                    <form className=" flex flex-col gap-4">
                        <input className="border-2 rounded p-2 border-white text-text-secondary" 
                        placeholder="ex. you@email.com"/>
                        <input className="border-2 rounded p-2 border-white text-text-secondary" 
                        placeholder="******"/>
                        <button className="text-black border-accent-hover bg-accent-hover font-medium border-2 p-2 rounded w-full
                        cursor-pointer">Sign In</button>
                    </form>
                </div>
                <div>
                    <p className="text-text-white"> Don't have an account? <span className="text-text-primary cursor-pointer ">Create one</span></p>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout