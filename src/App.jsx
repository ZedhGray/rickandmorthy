import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CharPage from './pages/CharPage'
import EpisodePage from './pages/EpisodePage'
import LocationPage from './pages/LocationPage'
import NavBar from './components/Shared/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char" element={<CharPage />} />
        <Route path="/episode" element={<EpisodePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route
          path="*"
          element={
            <h1>
              404 - Page not found
              <h1 />
            </h1>
          }
        />
      </Routes>
    </div>
  )
}
export default App
