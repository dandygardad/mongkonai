import { useState } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as PlusSVG} from '../../assets/icons/plus.svg'
import {ReactComponent as NegSVG} from '../../assets/icons/negative.svg'
import {ReactComponent as LoadingSVG} from '../../assets/icons/loading.svg'

const WeaponInfo = (props) => {
    const [isLoadingFocus, setIsLoadingFocus] = useState('PROCESS')   // ADD, PROCESS, ADDED
    
    let yourFocusButton
    if(isLoadingFocus === 'ADD'){
        yourFocusButton = <button className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto'><PlusSVG /><span className='text-button-text hover font-bold leading-none'>Add to Your Focus</span></button>
    } else if(isLoadingFocus === 'PROCESS'){
        yourFocusButton = <div className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto cursor-pointer'><LoadingSVG className='animate-spin' /><span className='text-[#545454] hover font-bold leading-none'>Loading</span></div>
    } else if(isLoadingFocus === 'ADDED'){
        yourFocusButton = <button className='my-2 py-2 px-4 flex items-center gap-3 bg-button rounded-lg w-fit shadow-md hover:bg-button-hover mx-auto'><NegSVG /><span className='text-button-text hover font-bold leading-none'>Remove from Your Focus</span></button>
    }

    return (
        <div className='container-box'>
            <div className={`bg-geo bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher w-full'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Weapon Info</p>
                    </span>
                    <img src={props.wp.images.nameicon} alt={props.wp.name} className="w-[250px] mx-auto py-3" />
                    <div className='flex flex-col w-full'>
                        <p className='px-3 pt-2 text-2xl font-semibold'>{props.wp.name}</p>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80'>
                            <p className='px-2 container-box__text w-full'>{props.wp.description}</p>
                            <table className="mt-3">
                                <tbody>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Material: </td>
                                        <td className='px-3 container-box__text bold align-top'><Link to={"/mats/" + props.wp.weaponmaterialtype.replace(/\s/g, '').toLowerCase()} className="font-bold underline">{props.wp.weaponmaterialtype}</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {yourFocusButton}
                </div>
            </div>
        </div>
    )
}

export default WeaponInfo