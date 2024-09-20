import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MovieDetail from './components/movieDetail'
import App from './App'

const AppRoutes = ()=>{

    return (
        <Router>
          <Routes>
            
             <Route path="/" element={<App/>} />
             <Route path="/movie/:id" element={<MovieDetail/>} />

            

             </Routes>
        </Router>
    )
}
export default AppRoutes;