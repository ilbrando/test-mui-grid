import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { sizeToWidth, Size } from "./layout";
import { Box } from "@material-ui/core";

interface IOwnProps {
  size: Size;
}

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: (props: IOwnProps) => sizeToWidth(theme, props.size, "md")
    },
    [theme.breakpoints.up("md")]: {
      width: (props: IOwnProps) => sizeToWidth(theme, props.size, "lg")
    }
  }
});

const useStyles = makeStyles(styles);

const Component: React.FC<IOwnProps> = props => {
  const classes = useStyles(props);
  return <Box className={classes.root}>{props.children}</Box>;
};

export { Component as SizeBox };
