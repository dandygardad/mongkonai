import Navbar from './components/global/Navbar'
import Search from './components/global/Search'

const App = () => {
    return (
        <div className='bg-no-repeat bg-scroll bg-cover font-josefin' style={{"backgroundImage": `url(${require('./assets/bg-inazuma.png')})`}}>
            <div className='max-w-screen-md mx-auto bg-main bg-opacity-60'>
                <Navbar />
                <Search />
            </div>
        </div>
    )
}

export default App