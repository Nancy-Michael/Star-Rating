import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import "./style.css"


function StarRating({ numOfStar = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [text, setText] = useState("");

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function handleMouseMove(getCurrentIndex) {
        setHover(getCurrentIndex)
        setText(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex) {
        setHover(rating)
        setText(rating)
    }
    function handleRatingText(getCurrentIndex) {
    setText(getCurrentIndex)
}

    return (
      <div className='container'>
    <div className='star-rating'>
          {
              [...Array(numOfStar)].map((_, index) => {
                  index += 1;

                  return <FaStar
                      key={index}
                      className={index <= (hover || rating) ? "active" : "inactive"}
                      onClick={() => { handleClick(index); handleRatingText(index) }}
                      onMouseMove={ ()=>handleMouseMove(index)}
                      onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                  />
              })
          }

            </div>
            <h3 className='rating-text'> {text} Star Rating</h3>
            </div>
  )
}

export default StarRating
