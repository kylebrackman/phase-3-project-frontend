import React from "react";
import { RevDiv, EditButton, DeleteButton } from "../StyledComponents"


function Reviews({ reviews, onReviewDelete }) {

    function handleDeleteClick(id) {
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: "DELETE",
        })
        .then(() => onReviewDelete(id))
    }

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
                <EditButton>Edit</EditButton>
                <DeleteButton onClick={() => handleDeleteClick(review.id)}>🗑</DeleteButton>
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
