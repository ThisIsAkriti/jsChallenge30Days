
// eslint-disable-next-line react/prop-types
const MovieCards = ({movie : {Poster , Year , Type, Title , imdbId}}) => {
  return (

    <div className=" flex justify-center " key={imdbId}>
        
        <div className="border border-blue-900 p-1 rounded-md"> 
            <img src={Poster!== "N/A" ? Poster : "https://via.placeholder.com/400"} alt="Poster" className="w-44 h-44" />
            <div className="p-2">
                <p className="text-sm">{Year}</p>
                <span className="text-sm">{Type}</span>
                <h3 className="font-semibold text-blue-900 w-40 line-clamp-1 ">{Title}</h3>
            </div>
        </div>
        
    </div>
    
  
  )
}

export default MovieCards
