import React from "react";

const LogoDiscord = ({ color = "black" }: { color?: string }) => {
    return (
        <svg
            width="41"
            height="35"
            viewBox="0 0 41 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="mingcute:discord-fill" clip-path="url(#clip0_364_10348)">
                <g id="Group">
                    <g id="Vector">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.5851 2.28274C27.0217 2.28274 29.1948 2.72715 30.5851 3.28274H31.5851C34.0181 4.30485 35.525 6.92683 36.5851 9.28274C38.3056 13.106 39.1719 18.4072 39.5851 22.2827C39.7821 24.1218 39.9385 26.038 39.5851 27.2827C39.2047 28.6126 37.8422 29.5432 36.5851 30.2827H35.5851C35.253 30.4686 34.9249 31.1027 34.5851 31.2827L33.5851 32.2827H31.5851L30.5851 33.2827C30.3575 33.4058 29.8426 33.2584 29.5851 33.2827C29.3276 33.3071 29.8317 33.3609 29.5851 33.2827C29.3385 33.2046 28.7818 33.4511 28.5851 33.2827C28.3884 33.1144 27.7007 32.5146 27.5851 32.2827C27.4694 32.0509 27.6014 31.5415 27.5851 31.2827C27.5688 31.024 27.4995 30.5274 27.5851 30.2827C27.6707 30.0381 28.4112 30.4746 28.5851 30.2827C28.759 30.0909 28.3503 29.3915 28.5851 29.2827H30.5851L29.5851 27.2827C26.901 28.3862 22.9431 29.2827 19.5851 29.2827C16.2271 29.2827 13.2692 28.3881 10.5851 27.2827L9.58509 29.2827H11.5851C11.812 29.3964 11.4188 30.0907 11.5851 30.2827C11.7514 30.4748 12.5048 30.0415 12.5851 30.2827C12.6654 30.524 12.603 31.029 12.5851 31.2827C12.5672 31.5364 12.6984 32.0552 12.5851 32.2827C12.4717 32.5103 11.7767 32.116 11.5851 32.2827C11.3935 32.4495 10.8257 33.2022 10.5851 33.2827C10.0991 33.4454 10.0434 33.5122 9.58509 33.2827L8.58509 32.2827C7.80883 31.8956 7.35363 31.6873 6.58509 31.2827L4.58509 30.2827H3.58509C2.32802 29.5432 0.963567 28.6126 0.585092 27.2827C0.22979 26.038 0.390062 24.1256 0.585092 22.2827C0.998324 18.4091 1.86458 13.106 3.58509 9.28274C4.64521 6.92683 6.15204 4.30485 8.58509 3.28274C10.1994 2.6052 12.7931 2.28274 14.5851 2.28274C15.7495 2.28274 16.7531 3.13673 16.5851 4.28274C17.8701 4.09213 18.2861 4.28158 19.5851 4.28274C20.9194 4.28274 22.3338 4.09303 23.5851 4.28274C23.5479 4.00783 23.5064 3.54871 23.5851 3.28274C23.6638 3.01676 24.4044 3.49283 24.5851 3.28274C24.7658 3.07264 24.3342 2.39988 24.5851 2.28274C24.8359 2.1656 25.3084 2.28625 25.5851 2.28274ZM13.5851 15.2827C12.6889 15.2827 12.2188 15.6474 11.5851 16.2827C10.9514 16.9181 10.5851 17.3843 10.5851 18.2827C10.5851 19.1812 10.9514 19.6474 11.5851 20.2827C12.2188 20.9181 12.6889 21.2827 13.5851 21.2827C14.4813 21.2827 15.9514 20.9181 16.5851 20.2827C17.2188 19.6474 17.5851 19.1812 17.5851 18.2827C17.5851 17.3843 17.2188 16.9181 16.5851 16.2827C15.9514 15.6474 14.4813 15.2827 13.5851 15.2827ZM26.5851 15.2827C25.6889 15.2827 24.2188 15.6474 23.5851 16.2827C22.9514 16.9181 22.5851 17.3843 22.5851 18.2827C22.5851 19.1812 22.9514 19.6474 23.5851 20.2827C24.2188 20.9181 25.6889 21.2827 26.5851 21.2827C27.4813 21.2827 27.9514 20.9181 28.5851 20.2827C29.2188 19.6474 29.5851 19.1812 29.5851 18.2827C29.5851 17.3843 29.2188 16.9181 28.5851 16.2827C27.9514 15.6474 27.4813 15.2827 26.5851 15.2827Z"
                            fill={color}
                        />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_364_10348">
                    <rect
                        width="40"
                        height="34"
                        fill="white"
                        transform="translate(0.585449 0.282715)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default LogoDiscord;
