import { useState, useEffect } from 'react'

import NewContent from "../components/home/NewContent"
import FocusBox from "../components/home/FocusBox"
import RandomCharacter from "../components/home/RandomCharacter"

const Home = () => {
    document.title = "Mongkonai"
    
    const [daily, setDaily] = useState([])
    const [focus, setFocus] = useState([])
    const [char, setChar] = useState({})
    const [isLoading, setIsLoading] = useState('Loading...')
    
    useEffect(() => {
        // Fetch from API
        fetch(`${process.env.REACT_APP_API_URL}/daily`).then((response) => response.json()).then((data) => {
            setDaily(data.materials)
            setChar(data.char)
            setIsLoading(false)
        }).catch(err => {
            setIsLoading("We're experiencing traffic overload, please try again.")
        })

        // Fetch/create from local storage for Your Focus
        if(localStorage.getItem('your_focus')){
            setFocus(JSON.parse(localStorage.getItem('your_focus')))
        } else {
            localStorage.setItem('your_focus', JSON.stringify([]))
            setFocus(JSON.parse(localStorage.getItem('your_focus')))
        }

    }, [])

    return(
        <>
        {isLoading ? <p className='text-zinc-100 text-center animate-pulse'>{isLoading}</p> 
        : 
        <>
        <NewContent />
        <div className="py-7 flex flex-col items-start gap-3 md:flex-row">
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