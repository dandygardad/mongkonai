import { Link } from 'react-router-dom'

const WeaponInfo = (props) => {
    return (
        <div className='container-box'>
            <div className={`bg-geo bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Material Info</p>
                    </span>
                    <img src={props.wp.images.nameicon} alt={props.wp.name} className="w-[250px] mx-auto" />
                    <div className='flex flex-col w-full'>
                        <p className='px-3 text-2xl font-semibold'>{props.wp.name}</p>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80'>
                            <p className='px-2 container-box__text'>{props.wp.description}</p>
                            <table className="mt-3">
                                <tbody>
                                    <tr>
                                        <td className='px-2 container-box__text align-top'>Material: </td>
                                        <td className='px-3 container-box__text bold align-top'><Link to={"/mat/" + props.wp.weaponmaterialtype.replace(/\s/g, '').toLowerCase()} className="font-bold underline">{props.wp.weaponmaterialtype}</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeaponInfo