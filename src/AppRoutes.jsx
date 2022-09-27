import { Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import Home from './pages/Home';
import Character from './pages/Character'
import Material from './pages/Material'
import About from './pages/About'
import Weapon from './pages/Weapon'
import Artifact from './pages/Artifact'
import Materials from './pages/Materials'

const routes = () => {
    return(
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="ch/:char" element={<Character />} />
                <Route path="mat/:material" element={<Material />} />
                <Route path="mats/:materials" element={<Materials />} />
                <Route path="wp/:weapon" element={<Weapon />} />
                <Route path="art/:artifact" element={<Artifact />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default routes