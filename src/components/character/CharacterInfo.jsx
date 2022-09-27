import { useState, useEffect } from 'react'
import {ReactComponent as PlusSVG} from '../../assets/icons/plus.svg'
import {ReactComponent as NegSVG} from '../../assets/icons/negative.svg'
import {ReactComponent as LoadingSVG} from '../../assets/icons/loading.svg'

const CharacterInfo = (props) => {
    const [isLoadingFocus, setIsLoadingFocus] = useState('ADD')   // ADD, PROCESS, ADDED

    useEffect(() => {
        if(!(localStorage.getItem('your_focus'))){
            localStorage.setItem('your_focus', JSON.stringify([]))
        }

        // Check if item already added
        setIsLoadingFocus('PROCESS')
        const storage = JSON.parse(localStorage.getItem("your_focus"))
        if(storage.find((item) => item.name === props.char.name)) {
            setIsLoadingFocus("ADDED")
        } else {
            setIsLoadingFocus("ADD")
        }
    }, [props.char.name])
    
    const handleAddFocusButton = () => {
        setIsLoadingFocus('PROCESS')
        const storage = JSON.parse(localStorage.getItem("your_focus"))
        localStorage.setItem('your_focus', JSON.stringify([...storage, {
            name: props.char.name,
            image: props.char.images.nameicon,
            url: props.char.name.replace(/(\s)|(')/g, '').toLowerCase(),
            category: "character"
        }]))
        setIsLoadingFocus('ADDED')
    }
    
    const handleRemoveFocusButton = () => {
        setIsLoadingFocus('PROCESS')
        const storage = JSON.parse(localStorage.getItem("your_focus")).filter((item) => item.name !== props.char.name)
        localStorage.setItem('your_focus', JSON.stringify(storage))
        setIsLoadingFocus("ADD")
    }

    let yourFocusButton
    if(isLoadingFocus === 'ADD'){
        yourFocusButton = <button onClick={handleAddFocusButton} className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto'><PlusSVG /><span className='text-button-text hover font-bold leading-none'>Add to Your Focus</span></button>
    } else if(isLoadingFocus === 'PROCESS'){
        yourFocusButton = <div className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto cursor-pointer'><LoadingSVG className='animate-spin' /><span className='text-[#545454] hover font-bold leading-none'>Loading</span></div>
    } else if(isLoadingFocus === 'ADDED'){
        yourFocusButton = <button onClick={handleRemoveFocusButton} className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto'><NegSVG /><span className='text-button-text hover font-bold leading-none'>Remove from Your Focus</span></button>
    }

    let imgChar
    if(props.char.name === 'Aether'){
        imgChar = <img src={require('../../assets/chars/aether.webp')} alt={props.char.name} className="w-[2048px] h-[350px] object-contain" />
    } else if(props.char.name === 'Lumine'){
        imgChar = <img src={require('../../assets/chars/lumine.webp')} alt={props.char.name} className="w-[2048px] h-[350px] object-contain" />
    } else {
        imgChar = <img src={props.char.images.namegachasplash} alt={props.char.name} className="w-[2048px] h-[350px] object-cover" />
    }

    return(
        <div className='container-box'>
            <div className={`bg-${props.char.element.toLowerCase()} bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Character Info</p>
                    </span>
                    {imgChar}
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row gap-2 items-center px-3'>
                            {props.char.element === "None" ? null : <img src={require(`../../assets/elements/Element_${props.char.element}.png`)} alt="Dendro" className='w-[30px]' />}
                            <p className=' text-2xl font-semibold'>{props.char.name}</p>
                        </div>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80'>
                            <p className='px-2 container-box__text'>{props.char.description}</p>
                            {!(props.char.element === "None") && <table className="mt-3">
                                <tbody>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Title:</td>
                                        <td className='px-3 font-bold container-box__text align-top'>{props.char.title}</td>
                                    </tr>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Vision: </td>
                                        <td className='px-3 container-box__text align-top'>{props.char.element}</td>
                                    </tr>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Birthday: </td>
                                        <td className='px-3 container-box__text align-top'>{props.char.birthday}</td>
                                    </tr>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Region: </td>
                                        <td className='px-3 container-box__text align-top'>{props.char.region}</td>
                                    </tr>
                                </tbody>
                            </table>}
                        </div>
                        {yourFocusButton}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo