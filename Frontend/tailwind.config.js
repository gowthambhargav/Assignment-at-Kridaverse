/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f3f3f3",
          "300": "rgba(233, 233, 233, 0.69)",
        },
        gray: {
          "100": "#8e8e8e",
          "500": "rgba(255, 255, 255, 0.69)",
          "600": "rgba(255, 255, 255, 0.12)",
          "700": "rgba(0, 0, 0, 0.5)",
          "800": "rgba(0, 0, 0, 0.69)",
          "900": "rgba(0, 0, 0, 0.09)",
          "1000": "rgba(0, 0, 0, 0.8)",
        },
        black1: "#000",
        gainsboro: {
          "100": "#e6e5e5",
          "200": "rgba(217, 217, 217, 0.08)",
        },
        darkslategray: {
          "100": "#383838",
          "200": "rgba(56, 56, 56, 0.66)",
          "300": "rgba(70, 70, 70, 0.92)",
        },
        maroon: {
          "100": "#7d0b03",
          "200": "#7c0b03",
          "300": "rgba(125, 11, 3, 0.6)",
        },
        firebrick: "#bd2424",
        lightgray: "#dacece",
        darkgray: {
          "100": "#adadad",
          "200": "#9c9c9c",
        },
        brown: "#b03d36",
        dimgray: {
          "100": "#696969",
          "200": "#5a5a5a",
          "300": "rgba(105, 105, 105, 0.09)",
        },
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "35xl": "54px",
        "29xl": "48px",
        "47xl": "66px",
        "96xl": "115px",
        "6xs": "7px",
        "sm-1": "13.1px",
        smi: "13px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      "2xl": "21px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "11xl": "30px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "45xl": "64px",
      "32xl": "51px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
