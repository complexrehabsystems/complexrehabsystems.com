import Typography from "typography";

const typography = new Typography({ 
  baseFontSize: "18px",
  googleFonts: [
    {
      name: "Roboto",
      styles: [
        "100",
        "200",
        "300",
        "400",
        "700",
      ],
    }
  ],
  headerFontFamily: ["Roboto"],
  bodyFontFamily: ["Roboto"],
});

export default typography;