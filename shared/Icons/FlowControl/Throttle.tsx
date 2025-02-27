import React from "react";
import type { IconProps } from "../props";

const Throttle = ({
  size = "1em",
  fill = "currentColor",
  className,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.53033 11.4697C7.23744 11.1768 6.76256 11.1768 6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L14.6911 20.7518C14.9748 20.3351 15.3351 19.9748 15.7518 19.6911L7.53033 11.4697Z"
        fill={fill === "currentColor" ? fill : undefined}
        className={`fill-${fill ? fill : "primary"}`}
      />
      <circle
        cx="4"
        cy="4"
        r="3.25"
        transform="matrix(-1 0 0 1 22 19)"
        stroke={fill === "currentColor" ? fill : undefined}
        className={`stroke-${fill ? fill : "primary"}`}
        strokeWidth="1.5"
      />
      <mask
        id="mask0_1947_491"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="9"
        width="28"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 9H4V23H15.8787L5.93934 13.0607C5.35355 12.4749 5.35355 11.5251 5.93934 10.9393C6.52513 10.3536 7.47487 10.3536 8.06066 10.9393L19.0607 21.9393C19.3536 22.2322 19.5 22.6161 19.5 23H32V9Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#mask0_1947_491)">
        <circle
          cx="18"
          cy="23"
          r="13"
          stroke={fill === "currentColor" ? fill : undefined}
          className={`stroke-${fill ? fill : "primary"}`}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default Throttle;
