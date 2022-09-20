import { Link } from 'react-router-dom'

const RandomCharacter = (props) => {
    return (
        <div className='container-box'>
            <Link to={`/ch/${props.char.name.replace(/\s/g, '').toLowerCase()}`} className={`bg-${props.char.element.toLowerCase()} bg-opacity-70 flex justify-between relative`}>
                <div className='flex flex-col items-start justify-between pb-2 text-zinc-100 tracking-tigher'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm md:text-base'>Random Character! </p>
                    </span>
                    <img src={props.char.image} alt={props.char.name} className="w-[2048px] h-[350px] object-cover" />
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row gap-2 items-center px-2'>
                            {props.char.element && <img src={require(`../../assets/elements/Element_${props.char.element}.png`)} alt="Dendro" className='w-[30px]' /> }
                            <p className=' text-2xl font-semibold'>{props.char.name}</p>
                        </div>
                        <div className='bg-zinc-800 m-2 py-3 px-2 rounded-md bg-opacity-80'>
                            <p className='px-2 text-xs md:text-sm leading-relaxed'>{props.char.desc}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RandomCharacter