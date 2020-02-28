import React from "react";
import { Box } from "@material-ui/core";

const themeSpacingBetween = 1;

const component: React.FC = props => (
  <>
    {React.Children.map(props.children, (c, i) => (
      <Box key={i} mt={i > 0 ? themeSpacingBetween : undefined}>
        {c}
      </Box>
    ))}
  </>
);

export { component as GroupContainer };
