import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M351.8 349.55c37.125 0 67.05-30.15 67.05-67.05s-30.15-67.05-67.05-67.05C314.675 215.45 284.75 245.6 284.75 282.5c-0.225 36.9 29.925 67.05 67.05 67.05z" />
    <path d="M825.2 73.925H198.8C129.725 73.925 73.925 129.725 73.925 198.8v626.175c0 69.075 56.025 125.1 125.1 125.1h626.175c69.075 0 125.1-56.025 125.1-125.1V198.8c-0.225-69.075-56.025-124.875-125.1-124.875zM144.8 198.8c0-29.925 24.075-54 54-54h626.175c29.7 0 54 24.075 54 54v361.575L715.85 397.25c-13.95-13.95-36.45-13.95-50.175 0l-185.625 185.4-102.825-106.2c-15.975-16.65-42.525-18-60.075-2.925l-172.35 154.575V198.8zM185.75 877.4c-23.4-5.85-40.725-27-40.725-52.425v-100.125l199.35-179.1 85.05 87.75L185.75 877.4z m693.45-52.2c0 29.7-24.3 54-54 54H284.525l406.35-406.35 188.1 188.1v164.25z" />
  </svg>
);