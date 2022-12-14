import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/global/Navbar'
import Search from './components/global/Search'
import SearchResults from './components/global/SearchResults'

const App = () => {
    const [isSearch, setIsSearch] = useState(false)

    // Search
    const handleSearch = (e) => {
        setIsSearch(e.target.value)
    }

    return (
        <>
        
        <div className='bg-inazuma bg-no-repeat bg-cover bg-center fixed z-[-1] h-screen w-screen'></div>
        <div className='font-josefin max-w-screen-md mx-auto bg-main bg-opacity-60 md:px-3 min-h-screen relative'>
            <Navbar />
            <Search handleSearch={handleSearch} />
            <div className='p-3'>
                {isSearch ? <SearchResults input={isSearch} updateInput={setIsSearch} /> : <Outlet />}
            </div>
        </div>
        </>
    )
}

export default App