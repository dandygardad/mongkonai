import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import CharacterInfo from '../components/character/CharacterInfo'
import ArtifactRec from '../components/character/ArtifactRec'
import FocusBox from '../components/home/FocusBox'
import StatsBox from '../components/character/StatsBox'

const Character = () => {
    const { char } = useParams()
    const [characterInfo, setCharacterInfo] = useState({})
    const [recommendation, setRecommendation] = useState()
    const [isLoading, setIsLoading] = useState("LOADING")

    // Fetch character data
    useEffect(() => {
        fetch('http://localhost:8000/characters/name/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: char })
        }).then(response => response.json()).then(data => {
            if(data.character) {
                // Update the title of the web
                document.title = `${data.character.name} - Mongkonai`
                setCharacterInfo(data.character)
                setIsLoading("LOADED")
                if(data.recommendation){
                    setRecommendation(data.recommendation)
                }
            } else {
                setIsLoading("NOTFOUND")
            }
            
        }).catch(err => console.error(err))
    }, [char])

    let recommendationComp
    if(recommendation){
        recommendationComp = <>
        <ArtifactRec data={recommendation.artifacts} daily={true} />
        <div className='flex flex-col md:items-start md:flex-row gap-3'>
            <FocusBox name="Weapons Recommendation" content={recommendation.weapons} characterPage={true} />
            <StatsBox stats={recommendation.stats} />
        </div>

        <div className='bg-showcase flex flex-col sm:flex-row justify-between items-center rounded-md my-7'>
            <img src={require('../assets/icons/levelup.png')} alt="Info" className='hidden sm:block w-[20%]' />
            <span className='p-3 text-sm text-center sm:py-0 sm:text-right'>
                <p className='font-bold'>Curated by {recommendation.curator}</p>
                <p>Wan't to contribute your recommendation? <Link to={"/about"} className="font-bold underline">Visit here!</Link></p>
            </span>
        </div>
        </>
    } else {
        recommendationComp = <>
        <div className='bg-showcase flex flex-col sm:flex-row justify-between items-center rounded-md my-7'>
            <img src={require('../assets/icons/notready.png')} alt="Info" className='hidden sm:block w-[20%]' />
            <span className='p-3 text-sm text-center sm:py-0 sm:text-right'>
                <p className='font-bold'>No recommendation now for {characterInfo.name}</p>
                <p>Wan't to contribute your recommendation? <Link to={"/about"} className="font-bold underline">Visit here!</Link></p>
            </span>
        </div>
        </>
    }

    let content
    if(isLoading === "LOADING"){
        content = <p className='text-zinc-100 text-center animate-pulse'>Loading</p>
    } else if(isLoading === "LOADED"){
        content = <>
                    <CharacterInfo char={characterInfo} />
                    {recommendationComp}
                    
                </>
    } else {
        content = <p className='text-zinc-100 text-center'>Character Not Found!</p>
    }


    return (
        <>
        {content}
        </>
    )
}

export default Character