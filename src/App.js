import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import Timer from './components/Timer';

function App() {
  const movie = {title:"Tenet",
    year:"2022",
    poster:"https://m.media-amazon.com/images/I/71OHH9HaB5S.jpg",
    rating:"7.9",

  }
  return (
    <>
    {/* <MovieCard movie={movie}/> */}
    <Timer/>
    </>
  );
}

export default App;
