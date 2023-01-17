import React from "react";
import { RevDiv } from "../StyledComponents"


function Reviews({ reviews }) {

    const reviewList = reviews.map(review => {
        return (
            <RevDiv>
                <div>
                    {review.item_name}
                </div>
                <div>
                    {review.item_review}
                </div>
                <div>
                    {review.item_rating}
                </div>
            </RevDiv>
        )
    })

    return (
        <div>
            {reviewList}
        </div>
    )
}
export default Reviews
