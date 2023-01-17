import React from "react";
import { MainDiv, SubsDiv } from "../StyledComponents"


function Submissions() {
// add conditonal rendering, must create user or username to see submission field
    return (
        <MainDiv>
            <SubsDiv>
                Submit a Review!
                <div>
                    <div style={{fontSize: 25}}>
                        Item Name
                    </div>
                    <textarea></textarea>
                </div>
                <div>
                    <div style={{fontSize: 25}}>
                        Item Review
                    </div>
                    <textarea></textarea>
                </div>
                <div>
                    <div style={{fontSize: 25}}>
                        Item Rating
                    </div>
                    <select>
                        <option>Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <p>Thanks Name!</p>
                </div>
            </SubsDiv>
        </MainDiv>
    )
}

export default Submissions