import "./details.css"

const DetailsMovie = ({ data }) => {
    console.log(data);
    return (
        <div className="full-details">
            <div className="title-details">
                Details
                <hr></hr>
            </div>
            <div className="background-container">
            <div className="details-movie">
                <p className="movie-name">{data.title.title}</p>
                < div className="top-row">
                    <img alt="movie" className="movie-poster" src={data.title.image.url}></img>
                    <div className="row-item">
                        <p className="movie-ratings">Movie rating: {data.ratings.rating}</p>
                        <p className="genres">Genres: {data.genres[0]} & {data.genres[1]}</p>
                        <p className="release">Released: {data.releaseDate}</p>
                    </div>

                </div>

                <p className="movie-plot">{data.plotSummary.text}</p>
            </div>
        </div>
        </div>
        
    )
}

export default DetailsMovie;