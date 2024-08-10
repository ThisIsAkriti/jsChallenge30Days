import { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
const api_Key = import.meta.env.VITE_SECRET_KEY;
const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${api_Key}`;

const Searchbar = () => {
    const [movieSearch , setMovieSearch] = useState([]);
    const [search , setSearch] = useState("");


    const searchMovie = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovieSearch(data.Search);
        
    }

    useEffect(() => {
        searchMovie("Avengers")
    } , [])
    return (
    <div>
        <div className=" w-screen grid grid-flow-col col-span-10 py-10 px-20">
            <input className="p-3 rounded-md col-span-8 outline-none placeholder:text-blue-900 text-blue-900" type="text" placeholder="Enter Movie Name!" value={search} 
            onChange={(e) => setSearch(e.target.value)} />
            <button className="py-3 px-6 border border-blue-900 rounded-md ml-4 text-blue-900" onClick={()=>searchMovie(search)}>Search</button>
        </div>

        {movieSearch?.length > 0 ? (
            <div className="flex flex-wrap  p-2 justify-center items-center gap-x-5 gap-y-8">
                {movieSearch.map((movie) => (
                    <MovieCards key={movie.title} movie={movie}/>        
                ))}
            </div>
        ) :(
            <div className="text-center font-semibold text-2xl">Nothing To Display!</div>
        )
        }
       
       
      
    </div>
  )
}

export default Searchbar
