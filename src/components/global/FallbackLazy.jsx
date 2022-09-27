import Navbar from "./Navbar"

const FallbackLazy = () => {
    return(
         <div className='bg-inazuma bg-no-repeat bg-cover font-josefin bg-fixed'>
            <div className='max-w-screen-md mx-auto bg-main bg-opacity-60 md:px-3 min-h-screen'>
                <Navbar />
                <div className='p-3'>
                    <p className='text-zinc-100 text-center animate-pulse'>Loading...</p>
                </div>
            </div>
        </div>
    )
}

export default FallbackLazy