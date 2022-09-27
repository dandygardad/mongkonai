import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import FallbackLazy from './components/global/FallbackLazy'

// React Lazy Loading
const Character = React.lazy(() => import('./pages/Character'))
const Material = React.lazy(() => import('./pages/Material'))
const About = React.lazy(() => import('./pages/About'))
const Weapon = React.lazy(() => import('./pages/Weapon'))
const Artifact = React.lazy(() => import('./pages/Artifact'))
const Materials = React.lazy(() => import('./pages/Materials'))

const routes = () => {
    return(
        <Suspense fallback={<FallbackLazy />}>
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
        </Suspense>
    )
}

export default routes