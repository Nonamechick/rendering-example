'use client'

// import { serverSideFunction } from "../utils/server-utils"
import { useTheme } from "../components/theme-provider"; 

import { clientSideFunction } from "../utils/client-utils";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
     const settings = {
    dots: true,
  };
  return (
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //   </Slider>
    // </div>
    <><h1 style={{ color: theme.colors.primary }}>Client router page</h1>
    <p>{result}</p>
    </>
  );
}