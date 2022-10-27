import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WeaponInfo from '../components/weapon/WeaponInfo'

const Weapon = () => {
    const { weapon } = useParams()
    const [weaponInfo, setWeaponInfo] = useState({})
    const [isLoading, setIsLoading] = useState("LOADING")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/weapons/name`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: weapon})
        }).then((response) => response.json()).then((data) => {
            if(data.weapon) {
                // Update the title of the web
                document.title = `${data.weapon.name} - Mongkonai`
                setWeaponInfo(data)
                setIsLoading("LOADED")
            }
            else {
                setIsLoading("NOTFOUND")
            }
        }).catch((err) => setIsLoading('FAILED'))
    }, [weapon])

    let content
    if(isLoading === "LOADING"){
        content = <p className='text-zinc-100 text-center animate-pulse'>Loading...</p>
    } else if(isLoading === 'FAILED'){
        content = <p className='text-zinc-100 text-center animate-pulse'>We're experiencing traffic overload, please try again.</p>
    } else if(isLoading === "LOADED"){
        content = <WeaponInfo wp={weaponInfo.weapon} />
    } else {
        content = <p className='text-zinc-100 text-center'>Weapon Not Found!</p>
    }

    return(
        <>
        {content}
        </>
    )
}

export default Weapon