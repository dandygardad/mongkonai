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
        <div className='bg-inazuma bg-no-repeat bg-cover font-josefin bg-fixed'>
            <div className='max-w-screen-md mx-auto bg-main bg-opacity-60 md:px-3 min-h-screen'>
                <Navbar />
                <Search handleSearch={handleSearch} />
                <div className='p-3'>
                    {isSearch ? <SearchResults input={isSearch} updateInput={setIsSearch} /> : <Outlet />}
                </div>
            </div>
        </div>
    )
}

export default App