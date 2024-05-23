"use client";
import "./slider.scss";
import React, { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface INodeSlider {
    children: ReactNode;
}
const NodeSliderMob = ({ children }: INodeSlider) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (i: any) => (
            <div
                style={{
                    width: "50px",
                    height: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#FAF7F5",
                    display: "inline-block",
                }}
            />
        ),
    };

    return (
        <div className="slider-container mt-[50px]">
            <Slider {...settings}>{children}</Slider>
        </div>
    );
};

export default NodeSliderMob;
