function MovieCard(props) {
    return (
        <div className="bg-white pt-4 px-4 pb-1 rounded-lg shadow-lg w-64 text-center ">
            <img className="w-full rounded-lg" src={props.movie.poster} alt={props.movie.title}/>
            <div className="mt-1 space-y-0.5 ">
                <p className="text-xl font-bold">{props.movie.title}</p>
                <p className="text-sm text-gray-500" >{props.movie.year}</p>
                <p className="text-sm font-semibold text-yellow-500 leading-tight" >{props.movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;
