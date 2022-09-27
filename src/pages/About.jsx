import { Link } from 'react-router-dom'

const About = () => {
    return(
        <>
        <div className='container-box'>
            <div className='flex flex-col items-start justify-between text-zinc-100 tracking-tigher'>
                <div className='w-full bg-zinc-800 py-4 px-3 bg-opacity-80'>
                    <h1 className='text-2xl font-bold mb-1'>Hello and Welcome!</h1>
                    <div className="pt-1 text-sm font-normal tracking-wider flex flex-col gap-3">
                        <p>Mongkonai is the unofficial website for Genshin Impact character build & stats recommendation. Curated by players after exploring something magical to their characters.</p>
                        <p>This website still in early development, you may see some bugs or errors while exploring. If you see it, I would like to say sorry and if you don't mind, please capture the bug and send me through <a href="mailto:mongkonaiweb@gmail.com" className="underline">email here</a>.</p>
                        <p className="font-bold text-center mt-3">Many thanks to:</p>
                        <ul className="text-center">
                            <li><a href="https://github.com/theBowja/genshin-db" className="underline">theBowja for Genshin Impact Data</a></li>
                            <li>HoYoverse for all assets</li>
                            <li>Budi Ginanjar/Goblin Slayer</li>
                            <li className="mt-3">and you!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-showcase flex flex-col sm:flex-row justify-between items-center rounded-md my-7 min-h-[72px]'>
            <img src={require('../assets/icons/new.png')} alt="Info" className='hidden sm:block w-[20%]' />
            <span className='p-3 text-sm text-center sm:py-0 sm:text-right'>
                <p className='font-bold text-lg'>Recommendation Form Coming Soon!</p>
                <p className='text-base'> If you want to see how is the result, check <Link to="/ch/xiao" className='underline'>Xiao</Link></p>
            </span>
        </div>
        {/* <p className='text-center text-zinc-100 font-bold tracking-wider text-sm'>May the wind lead and bless your adventures.</p> */}
        <p className='text-center text-zinc-100 text-sm'>Created by: <a href="https://dandai.my.id/" className='underline'>Dandy Garda</a></p>
        <p className='text-center text-zinc-100 text-sm'>mongkonai 2022 - beta</p>
        </>
    )
}

export default About