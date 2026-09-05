import {useNavigate,NavLink} from  'react-router-dom'


function Sidebar(){

    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem('token')
        navigate('/')
    }
    return(
        <div className="bg-bg-surface min-w-1/4 h-screen flex flex-col gap-4 border-r border-border">
            <div className="flex gap-3 items-center pl-6 py-3 pb-4 border-b border-border">
                <h1 className="font-bold bg-accent px-2 py-1 rounded-lg text-sm">J</h1>
                <h2 className="font-bold  text-text-primary cursor-pointer">JobTrail</h2>
            </div>
            <nav>
                <ul className="flex flex-col gap-3 px-10">
                    <li>
                        <NavLink to='/dashboard' className="text-sm text-text-secondary cursor-pointer">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/apps' className="text-sm text-text-secondary cursor-pointer">My Applications</NavLink>
                    </li>
                    <li>
                        <NavLink to='/account' className="text-sm text-text-secondary cursor-pointer">Account</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto border-t border-border">
                <div className="flex items-center mt-2 gap-2 mb-2 px-2">
                    <div 
                        className="text-accent bg-bg-elevated rounded-full px-1 py-1 font-bold text-sm">
                        RA</div>
                    <div>
                        <h3 className="text-sm text-text-primary">Rian Arip Nugraha</h3>
                        <p  onClick={handleLogout}
                            className="text-xs text-text-secondary cursor-pointer">Logout</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar