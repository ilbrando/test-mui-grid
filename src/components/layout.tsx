import React from "react";
import { Box, BoxProps } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type Size = 1 | 2 | 3 | 4;
const themeSpacingSizeMd = 15;
const themeSpacingSizeLg = 20;

export const sizeToWidth = (theme: Theme, size: Size, breakPoint: Breakpoint) => {
  let oneUnitSize;
  switch (breakPoint) {
    case "xs":
    case "sm":
    case "md":
      oneUnitSize = theme.spacing(themeSpacingSizeMd);
      break;
    default:
      oneUnitSize = theme.spacing(themeSpacingSizeLg);
  }
  return oneUnitSize * size + theme.spacing(themeSpacingBetween) * (size - 1);
};

export interface ISizeProps {
  size?: Size;
}

const themeSpacingBetween = 2;

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
