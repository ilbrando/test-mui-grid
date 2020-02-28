import React from "react";
import { Box, BoxProps } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type Size = 1 | 2 | 3 | 4;

const themeSpacingBetween = 1; // 1 themeendhed (dvs. 1 x 8px)

/**
 * Definition:
 * Vi understøtter ikke under MD.
 * Sidebar = 25 * 8 = 200
 * Content margin left = 2 * 8 = 16
 * Content margin right = 2 * 8 = 16
 * Card padding left = 2 * 8 = 16
 * Card paddring right = 2 * 8 = 16
 * I alt = 200 + 16 + 16 + 16 + 16  = 264;
 * Card gutter (mellem to cards) = 2 * 8 = 16
 * Ved MD (960-1280): Kun plads til én kolonne
 * Ved LG (1280-1920): Plads til to kolonne
 * Ved XL (1920-uendeligt): Plads til to kolonner
 *
 * Ved LG 1280 og 2 kolonner
 * sidebar = 280
 * content margin left = 16
 * content margin right = 16
 * CARD 1
 * card padding left = 16
 * card padding right = 16
 * CARD 2
 * card padding left = 16
 * card padding right = 16
 * card gutter = 16
 * I alt = 200 + 16 + 16 + 16 + 16 + 16 + 16 + 16 = 312
 * 4 units = (1280 - 312) / 2 = 484
 *
 * Ved MD 960 og 1 kolonne
 * sidebar = 280
 * content margin left = 16
 * content margin right = 16
 * CARD 1
 * card padding left = 16
 * card padding right = 16
 * I alt = 200 + 16 + 16 + 16 + 16 = 312
 * 4 units = 960 - 312 = 648
 *
 */
export const sizeToWidth = (theme: Theme, size: Size, breakPoint: Breakpoint) => {
  let fourUnitSize;
  const sidebar = theme.spacing(25);
  const leftmargin = theme.spacing(2);
  const rightmargin = leftmargin;
  const cardleftpadding = theme.spacing(2);
  const cardrightpadding = cardleftpadding;
  const middlegutter = theme.spacing(2);
  const spacing = sidebar + leftmargin + rightmargin + 2 * (cardleftpadding + cardrightpadding) + middlegutter;
  switch (breakPoint) {
    case "xs":
    case "sm":
    case "lg":
      fourUnitSize = (theme.breakpoints.values.lg - spacing) / 2;
      break;
    case "xl":
      fourUnitSize = (theme.breakpoints.values.lg - spacing) / 2;
      break;
    default:
      throw new Error("Ulovligt breakpoint");
  }
  const oneUnitSize = (fourUnitSize - theme.spacing(themeSpacingBetween) * 3) / 4;
  return oneUnitSize * size + theme.spacing(themeSpacingBetween) * (size - 1);
};

export interface ISizeProps {
  size?: Size;
}

type Props = Pick<BoxProps, "bgcolor">;

const component: React.FC<Props> = props => (
  <Box display="flex" bgcolor={props.bgcolor}>
    {React.Children.map(props.children, (c, i) => (
      <Box key={i} ml={i > 0 ? themeSpacingBetween : undefined}>
        {c}
      </Box>
    ))}
  </Box>
);

export { component as Layout };
