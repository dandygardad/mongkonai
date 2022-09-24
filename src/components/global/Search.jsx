import { ReactComponent as SearchBlack } from '../../assets/icons/search-black.svg'

const Search = () => {
    return (
        <div className='p-5 max-w-screen-sm mx-auto'>
            <div className='flex justify-center items-center gap-x-3 py-2 px-4 w-full rounded-full bg-search drop-shadow-md'>
                <SearchBlack />
                <input type="text" className='w-full bg-search focus:outline-0' placeholder='Search character' />
            </div>
        </div>
    )
}

export default Search