import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movie = {title:"Tenet",
    year:"2022",
    poster:"https://m.media-amazon.com/images/I/71OHH9HaB5S.jpg",
    rating:"7.9",

  }
  return (
    <>
    {/* <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1> */}

    <MovieCard movie={movie}/>
    </>
  );
}

export default App;
