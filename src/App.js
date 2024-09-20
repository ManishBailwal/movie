import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import image from './images/movieImage.png';
import {Link} from 'react-router-dom'

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    //fetching movie data from API

    axios.get('https://dummyapi.online/api/movies').then(response => {

        setMovies(response.data);
    }).catch(error =>{
      console.log("error fetching the movie data", error);
    })
  }, []);




  return (
    <div className="container">

      <h1>Movie Database</h1>

      <div className="main">
        {movies.map(movie => (

        
          <div className="movieContainer" key={movie.id}>

            <img src={image} alt="movieimage" />

          

           <div className="movieName">
           <span>{movie.id}. </span>
           <span>{movie.movie}</span>
           </div>
         
          <span className="rating">Movie Rating:{movie.rating}</span>
         
         <div className="btn">
          <Link to={`/movie/${movie.id}`}><button >View</button></Link> 
          </div>
          </div>

      

        ))}

       
        
      </div>
    
     


    </div>
  );
}

export default App;
