import { useState } from 'react';
import './App.css';
import { MOVIE_API_URL, movieAPIOptions } from './api';
import Search from './components/search/search';
import DetailsMovie from './components/details/details';
import ReviewsMovie from './components/reviews/reviews';
import Topbar from './components/top-bar/top-bar';

function App() {

  const [detailsMovie, setDetailsMovie] = useState(null);
  const [reviewsMovie, setReviewsMovie] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const movieID = searchData.value.slice(7, searchData.value.length - 1);
    const detailsMovieFetch = fetch(`${MOVIE_API_URL}title/get-overview-details?tconst=${movieID}`, movieAPIOptions);
    const reviewsMovieFetch = fetch(`${MOVIE_API_URL}title/get-reviews?tconst=${movieID}`, movieAPIOptions);

    // Get information from both APIs
    Promise.all([detailsMovieFetch, reviewsMovieFetch])
      .then(async (response) => {
        const detailsResponse = await response[0].json();
        const reviewsResponse = await response[1].json();

        setDetailsMovie({ movie: searchData.label, ...detailsResponse });
        setReviewsMovie({ movie: searchData.label, ...reviewsResponse });
      })
      .catch((err) => console.log(err));
  }

  return (

    <div className='container'>
      <Topbar />
      <div className='bottom-container'>
        <Search onSearchChange={handleOnSearchChange} />
        {detailsMovie && <DetailsMovie data={detailsMovie} />}
        {reviewsMovie && <ReviewsMovie data={reviewsMovie} />}
      </div>
    </div>
  );
}

export default App;
