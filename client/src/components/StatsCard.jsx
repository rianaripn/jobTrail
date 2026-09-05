function StatsCard ({title,value,color,colorAccent}){
    return (
        <section className={`flex-1 flex flex-col h-24 justify-center px-4 py-6 bg-bg-elevated border border-border rounded-md   
        border-l-4 ${color} gap-1`}>                  
            <h2 className={`text-3xl font-bold ${colorAccent}`}>{value}</h2>
            <p className="text-xs text-text-secondary" >{title}</p>
        </section>
    )
}

export default StatsCard