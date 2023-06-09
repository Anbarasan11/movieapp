import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../compoents";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=efc5b4082db5efb52fc8ff69e1311c7c&language=en-US&page=1");
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}   />
          )) }          
        </div>
      </section>
    </main>
  )
}
