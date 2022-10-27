import { useState, useEffect } from 'react'

import Navbar from "./Navbar"

const FallbackLazy = () => {
    const [isTooLong, setIsTooLong] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setIsTooLong(true), 5000)
        return () => clearTimeout(timeout)
    })
    return(
        <>
        <div className='bg-inazuma bg-no-repeat bg-cover bg-center fixed z-[-1] h-screen w-screen'></div>
        <div className='max-w-screen-md mx-auto bg-main bg-opacity-60 font-josefin md:px-3 min-h-screen relative'>
            <Navbar />
            <div className='p-3'>
                {isTooLong ?
                <p className='text-zinc-100 text-center animate-pulse'>We're experiencing traffic overload, please try again.</p>
                :
                <p className='text-zinc-100 text-center animate-pulse'>Loading...</p>
                }
            </div>
        </div>
        
        </>
    )
}

export default FallbackLazy