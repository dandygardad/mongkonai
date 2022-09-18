import { Outlet } from 'react-router-dom'

import Navbar from './components/global/Navbar'
import Search from './components/global/Search'

const App = () => {
    return (
        <div className='bg-inazuma bg-no-repeat bg-scroll bg-cover font-josefin'>
            <div className='max-w-screen-md mx-auto bg-main bg-opacity-60 md:px-3 min-h-screen'>
                <Navbar />
                <Search />
                <div className='p-3'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default App