import { style } from "@vanilla-extract/css";

export const myStyle = style({
    // cast to pixels
    padding: 10,
    marginTop: 25,

    fontSize: "100px",

    // unitless properties
    flexGrow: 1,
    opacity: 0.5,
});
