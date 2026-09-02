function StatsCard ({title,value,color,colorAccent}){
    return (
        <section className={`flex flex-col justify-center px-3 bg-bg-elevated border border-border rounded-md aspect-square w-25 
        border-l-4 ${color} gap-1`}>                  
            <h2 className={`text-2xl font-bold ${colorAccent}`}>{value}</h2>
            <p className="text-xs text-text-secondary" >{title}</p>
        </section>
    )
}

export default StatsCard