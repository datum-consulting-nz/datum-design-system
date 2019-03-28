import palx from "palx";
import { includes, get, omit } from "lodash";
import { removeProps } from "styled-system";

const primaryColor = "#368ff5";
export const palette = palx(primaryColor);

export const brandColors = {
  primary: palette.blue[5],
  lightPrimary: palette.blue[3],
  darkPrimary: palette.blue[7],
  accent: palette.orange[5],
  lightAccent: palette.orange[3],
  darkAccent: palette.orange[7],
  successGreen: palette.green[5],
  errorRed: palette.red[5]
};

export const grayColors = {
  trueBlack: "#000000",
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[5],
  smokeWhite: palette.gray[2],
  snowWhite: palette.gray[0],
  trueWhite: "#ffffff"
};

export const blueColors = {
  blue0: palette.blue[0],
  blue1: palette.blue[1],
  blue2: palette.blue[2],
  blue3: palette.blue[3],
  blue4: palette.blue[4],
  blue5: palette.blue[5],
  blue6: palette.blue[6],
  blue7: palette.blue[7],
  blue8: palette.blue[8],
  blue9: palette.blue[9],
}

export const orangeColors = {
  orange0: palette.orange[0],
  orange1: palette.orange[1],
  orange2: palette.orange[2],
  orange3: palette.orange[3],
  orange4: palette.orange[4],
  orange5: palette.orange[5],
  orange6: palette.orange[6],
  orange7: palette.orange[7],
  orange8: palette.orange[8],
  orange9: palette.orange[9],
}

export const greenColors = {
  green0: palette.green[0],
  green1: palette.green[1],
  green2: palette.green[2],
  green3: palette.green[3],
  green4: palette.green[4],
  green5: palette.green[5],
  green6: palette.green[6],
  green7: palette.green[7],
  green8: palette.green[8],
  green9: palette.green[9],
}

export const violetColors = {
  violet0: palette.violet[0],
  violet1: palette.violet[1],
  violet2: palette.violet[2],
  violet3: palette.violet[3],
  violet4: palette.violet[4],
  violet5: palette.violet[5],
  violet6: palette.violet[6],
  violet7: palette.violet[7],
  violet8: palette.violet[8],
  violet9: palette.violet[9],
}

export const colors = {
  ...brandColors,
  ...grayColors,
  ...blueColors,
  ...greenColors,
  ...violetColors,
  ...orangeColors,
  ...palette
};

export const cx = key => get(colors, key, key);

const createMediaQuery = n => `@media screen and (min-width:${n}em)`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

const aliases = ["sm", "md", "lg", "xl"];
export const breakpoints = [32, 48, 64, 80];

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: "@media (prefers-reduced-motion: reduce)",
  reduceTransparency: "@media (prefers-reduced-transparency: reduce)"
};

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 6, 12, 18, 24, 36, 72, 90, 108, 144, 288, 432];

const emoji = "\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"";
export const font = `"Phantom Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif,${emoji}`;
export const mono = "SFMono-Regular,\"Roboto Mono\",Menlo,monospace";

export const fontSizes = [12, 14, 16, 18, 22, 29, 36, 42, 48, 52];

export const regular = "regular";
export const bold = "bold";

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold };

export const scaleFactor = 17 / 16;
export const transition = `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`;

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = "9999px";
export const radii = ["0px", "4px", "8px", "16px", pill];
export const radius = "4px";

export const shadowColor = "rgba(0,0,0,0.125)";
export const baseShadow = "0 0 2px 0 rgba(0,0,0,.0625),";
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`
];

export const hexa = (color, alpha) => {
  const hex = cx(color);
  if (!includes(hex, "#")) return shadowColor;
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const gradient = (color1, color2) =>
  `radial-gradient(
    ellipse farthest-corner at top left,
    ${cx(color1)} 0%, ${cx(color2)} 100%
  )`;

export const filterProps = props =>
  omit(removeProps(props), [
    "theme",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "color",
    "bg",
    "fill",
    "fontSize",
    "f",
    "image",
    "maxWidth",
    "bold",
    "regular",
    "caps",
    "wrap",
    "size",
    "height",
    "boxShadowSize"
  ]);

const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  brandColors,
  grayColors,
  blueColors,
  orangeColors,
  greenColors,
  violetColors,
  radii,
  radius,
  pill,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
  cx,
  hexa,
  gradient
};

export default theme;
