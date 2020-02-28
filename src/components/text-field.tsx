import React from "react";
import { TextField } from "office-ui-fabric-react";
import { ISizeProps, Size } from "./layout";
import { FormFieldContainer } from "./form-field-container";

const defaultSize: Size = 2; // This is the default size for this component

interface IOwnProps {
  foo?: string;
}

type Props = IOwnProps & ISizeProps;
const Component: React.FC<Props> = props => {
  return (
    <FormFieldContainer size={props.size ?? defaultSize}>
      <TextField width="100%" />
    </FormFieldContainer>
  );
};

export { Component as TextField };
