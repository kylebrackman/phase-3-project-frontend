import React from "react";
import { RevDiv } from "../StyledComponents"


function Reviews({ reviews }) {

    const reviewList = reviews.map(review => {
        return (
            <div>
                <RevDiv>
                    {review.item_name} 
                </RevDiv>
            </div>
        )
    })

    return (
        <div>
            {reviewList}
        </div>

    )
}
export default Reviews
