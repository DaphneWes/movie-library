import "./reviews.css"
const ReviewsMovie = ({ data }) => {
    const reviews = data.metacritic.reviews;
    console.log(reviews);

    return (
        <div className="reviews-container">
            <div className="title-reviews">
                Reviews
                <hr></hr>
            </div>
            <div className="review-cards">
                {reviews.map((review) => (
                    <div className="full-review">
                        <div className="name-reviewer">
                            {review.reviewer}
                        </div>
                        <div className="quote-reviewer">
                            {review.quote}
                        </div>
                        <div className="score-reviewer">
                            {review.score}
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default ReviewsMovie;