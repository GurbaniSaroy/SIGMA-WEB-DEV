import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicked, setClicked] = useState(0);
    function toggleLike() {
        setIsLiked(!isLiked);
        setClicked(clicked+1);
    }
    return (
        <div>
            <p>Count = {clicked}</p>
            <p onClick={toggleLike}>
            
               {
                isLiked ? <i class="fa-solid fa-heart"></i> :
                <i class="fa-regular fa-heart"></i>
               }
                </p>
        </div>
    );
}