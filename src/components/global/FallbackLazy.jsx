import Navbar from "./Navbar"

const FallbackLazy = () => {
    return(
        <>
        <div className='bg-inazuma bg-no-repeat bg-cover fixed z-[-1] h-screen w-screen'></div>
        <div className='max-w-screen-md mx-auto bg-main bg-opacity-60 font-josefin md:px-3 min-h-screen relative'>
            <Navbar />
            <div className='p-3'>
                <p className='text-zinc-100 text-center animate-pulse'>Loading...</p>
            </div>
        </div>
        
        </>
    )
}

export default FallbackLazy