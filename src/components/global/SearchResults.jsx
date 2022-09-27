import { useState, useEffect } from 'react'

import ButtonSearch from './ButtonSearch'

const SearchResults = (props) => {
    document.title = `"${props.input}" search results - Mongkonai`
    const [allCharacters, setAllCharacters] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/characters`)
        .then((response) => response.json())
        .then((data) => {
            if(data.characters){
                setAllCharacters(data.characters)
                setIsLoading(false) 
            }
        }).catch((err) => console.error(err))
    }, [])

    const filteredChar = !(isLoading) && allCharacters.filter((item) => item.name.toLowerCase().includes(props.input.toLowerCase()))
    return(
        <>
        {isLoading ? <p className='text-zinc-100 text-center animate-pulse'>Loading</p> :
        <><p className='text-zinc-100 text-center pb-3'>Search results of "{props.input}"</p>
        <div className='flex flex-col gap-3'>
            {filteredChar.map((item, index) => <ButtonSearch key={index} name={item.name} image={item.image} url={'/ch/' + item.url} updateInput={props.updateInput} />)}
        </div></>
        }
        </>
    )
}

export default SearchResults