function AuthLayout({ children }) {
    return(
        <div className="flex h-screen">
        {/* left panel */}
            <div className="flex flex-col w-1/2 bg-bg-surface justify-center px-12 py-8">
                <h1 className="text-accent text-3xl font-black">JobTrail</h1>
                <h2 className="text-text-white text-4xl mt-4">Track every step of your journey to your dream job.</h2>
                <p className="text-text-secondary mt-2 ">A calm, organized home for every jobs application 
                    <span className="text-text-primary font-medium italic"> - no more spreadsheets.</span></p>
            </div>
        {/* right panel */}
            <div className="w-1/2 bg-bg-base flex flex-col justify-center px-12">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout