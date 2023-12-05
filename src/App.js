import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import Registation from './components/registration/Registration';
import Login from './components/header/login/Login';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);
        console.log('movie', singleMovie)
        setReviews(response.data.reviewIds);
        console.log('array of reviews', response.data.reviewIds);

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[movie])

  return (
    <div className="App">
      {/* <Route path="/" element={<Header />} /> */}
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={[<Home movies={movies} />, <Header />]} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={[<Trailer/>,<Header />]}></Route>
            <Route path="/Reviews/:movieId" element ={[<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />, <Header />]}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
            <Route path="/registration" element={<Registation/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
