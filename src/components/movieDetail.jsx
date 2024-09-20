import  {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import image from '../images/movieImage.png'
const MovieDetail = () =>{

    const {id} = useParams();//Access the movie Id from the url params

    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        axios.get(`https://dummyapi.online/api/movies/${id}`).then(response => {
            
            setMovie(response.data);
        }).catch(error => {
            console.log("error fetching the movie details", error);
        })
    }, [id]);



  if(!movie){
    return <div>Loading...</div>
  }
    return (
        <div>
            <h2>{movie.id}</h2>
            <h2>{movie.movie}</h2>
            <h2>{movie.rating}</h2>
             <img src={image} alt="Img"/>
             <h2>{movie.imdb_url}</h2>

        </div>
    )  
    


};

export default MovieDetail



