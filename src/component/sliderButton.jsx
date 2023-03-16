import React from "react";
export function SliderButton({ direction, moveSlide }) {
    console.log(direction, moveSlide);

    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            {/* <img src={} /> */}
            <p>{direction === "next" ? 'rightArrow' : 'leftArrow'}</p>
        </button>
    );
}