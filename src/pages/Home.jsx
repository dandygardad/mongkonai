import { useState, useEffect } from 'react'

import NewContent from "../components/home/NewContent"
import FocusBox from "../components/home/FocusBox"
import RandomCharacter from "../components/home/RandomCharacter"

const Home = () => {
    document.title = "Mongkonai"
    
    const [daily, setDaily] = useState([])
    const [focus, setFocus] = useState([])
    const [char, setChar] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        fetch('http://localhost:8000/daily').then((response) => response.json()).then((data) => {
            setDaily(data.materials)
            setFocus(data.materials)
            setChar(data.char)
            setIsLoading(false)
        }).catch(err => console.error(err))
    }, [])

    return(
        <>
        {isLoading ? <p className='text-zinc-100 text-center animate-pulse'>Loading...</p> 
        : 
        <>
        <NewContent />
        <div className="py-7 flex flex-col gap-3 md:flex-row">
            {/* BUAT ENDPOINT UNTUK FOCUS */}
            <FocusBox name="Daily Materials" daily={true} content={daily} />
            <FocusBox name="Your Focus" daily={false} content={focus} />
        </div>
        <RandomCharacter char={char} />
        </>}
        </>
    )
}

export default Home