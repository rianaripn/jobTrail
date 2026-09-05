function StatusBar({label,color,percentage,count}){
    
    return (
        <div className="flex gap-3 items-center w-full">
            <h2 className="text-text-secondary text-sm w-32">{label}</h2>
            <div className="flex-1 bg-bg-surface rounded-full h-2 ">
                <div className= {`${color} h-2 rounded-full`}
                        style={{width:`${percentage}%`}}
                ></div>
            </div>
            <p className="text-text-secondary text-xs">{count}</p>
        </div>
    )
    
}

export default StatusBar