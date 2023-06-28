import "./reviews.css"

const ReviewsMovie = ({ data }) => {
    const reviews = data.metacritic.reviews;

    return (
        <div className="reviews-container">
            <div className="title-reviews">
                Reviews
                <hr></hr>
            </div>
            <div className="review-cards">
                {reviews.map((review, id) => (
                    <div className="full-review" key={id}>
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