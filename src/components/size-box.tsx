import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { sizeToWidth, Size } from "./layout";
import { Box, BoxProps } from "@material-ui/core";

interface IOwnProps {
  size: Size;
}

type Props = IOwnProps & Pick<BoxProps, "bgcolor">;

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: (props: IOwnProps) => sizeToWidth(theme, props.size, "lg")
    },
    [theme.breakpoints.up("md")]: {
      width: (props: IOwnProps) => sizeToWidth(theme, props.size, "xl")
    }
  }
});

const useStyles = makeStyles(styles);

const Component: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <Box component="div" className={classes.root} pt={0.5} pb={0.5} bgcolor={props.bgcolor}>
      {props.children}
    </Box>
  );
};

export { Component as SizeBox };
