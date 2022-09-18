import { Link } from 'react-router-dom'

const NewContent = () => {
    return(
        <div className='container-box'>
            <Link to="/ch/tighnari" className='bg-dendro bg-opacity-70 flex justify-between relative'>
                <div className='absolute flex flex-col justify-between pb-0.5 text-zinc-100 tracking-tigher'>
                    <span className='pt-1 pl-2 pr-5 bg-zinc-800 bg-opacity-80 rounded-br-md'>
                        <p className='text-sm'>What's new on 3.0? </p>
                    </span>
                    <p className='px-2 py-2.5 text-2xl font-semibold'>Tighnari</p>
                </div>
                <img src={require('../../assets/new-content/tighnari.png')} alt="Tighnari" className='new-content__img' />
            </Link>
        </div>
    )
}

export default NewContent