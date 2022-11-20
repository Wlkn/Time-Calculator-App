import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Screen.css";
import useFitText from "use-fit-text";

function Screen({ value, onSlideChange }) {
    const { fontSize, ref } = useFitText({ maxFontSize: 1000 });
    return (
        <div className="screen">
            <Swiper loop={true} onSlideChangeTransitionEnd={onSlideChange} spaceBetween={400}>
                <SwiperSlide>
                    <div className="screen" ref={ref} style={{ fontSize }}>
                        {value}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Screen;
