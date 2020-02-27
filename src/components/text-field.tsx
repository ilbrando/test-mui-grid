import React from "react";
import { TextField } from "office-ui-fabric-react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ISizeProps, sizeToWidth, Size } from "./layout";

const defaultSize: Size = 2; // This is the default size for this component

interface IOwnProps extends ISizeProps {
  foo?: string;
}

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: (props: ISizeProps) => sizeToWidth(theme, props.size ?? defaultSize, "md")
    },
    [theme.breakpoints.up("md")]: {
      width: (props: ISizeProps) => sizeToWidth(theme, props.size ?? defaultSize, "lg")
    }
  }
});

const useStyles = makeStyles(styles);

const Component: React.FC<ISizeProps> = props => {
  const classes = useStyles(props);
  return <TextField className={classes.root} />;
};

export { Component as TextField };
