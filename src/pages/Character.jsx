import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import CharacterInfo from '../components/character/CharacterInfo'
import ArtifactRec from '../components/character/ArtifactRec'
import FocusBox from '../components/home/FocusBox'
import StatsBox from '../components/character/StatsBox'

const Character = () => {
    const { char } = useParams()
    const [characterInfo, setCharacterInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // Fetch character data
    useEffect(() => {
        fetch('http://127.0.0.1:8000/characters/name/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: char })
        }).then(response => response.json()).then(data => {
            // Update the title of the web
            document.title = `${data.character.name} - Mongkonai`
            setCharacterInfo(data)
            setIsLoading(false)
        }).catch(err => console.error(err))
    }, [char])

    const materials = [
        {
            "name": "Bit of Aerosiderite",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114023.png",
            "url": "bitofaerosiderite",
            "material": true
        },
        {
            "name": "Dream of the Dandelion Gladiator",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_114012.png",
            "url": "dreamofthedandeliongladiator",
            "material": true
        },
        {
            "name": "Stained Mask",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_112006.png",
            "url": "stainedmask",
            "material": true
        },
        {
            "name": "Stained Mask",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_112006.png",
            "url": "stainedmask",
            "material": true
        },
        {
            "name": "Stained Mask",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_112006.png",
            "url": "stainedmask",
            "material": true
        },
        {
            "name": "Stained Mask",
            "image": "https://res.cloudinary.com/genshin/image/upload/sprites/UI_ItemIcon_112006.png",
            "url": "stainedmask",
            "material": true
        },
        
    ]

    return (
        <>
        {isLoading ? <p className='text-zinc-100 text-center animate-pulse'>Loading...</p> 
        :
        <>
        <CharacterInfo char={characterInfo.character} />
        <ArtifactRec char={characterInfo.character} daily={true} />

        <div className='flex flex-col md:items-start md:flex-row gap-3'>
            <FocusBox name="Weapons Recommendation" content={materials} characterPage={false} />
            <StatsBox />
        </div>

        <div className='bg-showcase flex flex-col sm:flex-row justify-between items-center rounded-md my-7'>
            <img src={require('../assets/icons/levelup.png')} alt="Info" className='hidden sm:block w-[20%]' />
            <span className='p-3 text-sm text-center sm:py-0 sm:text-right'>
                <p className='font-bold'>Curated by Goblin Slayer (Bilalang 3)</p>
                <p>Wan't to submit your recommendation? <Link to={"/about"} className="font-bold underline">Visit here!</Link></p>
            </span>
        </div>
        </>
        }
        </>
    )
}

export default Character