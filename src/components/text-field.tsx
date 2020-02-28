import React from "react";
import { TextField, ITextFieldProps } from "office-ui-fabric-react";
import { ISizeProps, Size } from "./layout";
import { SizeBox } from "./size-box";

const defaultSize: Size = 2; // This is the default size for this component

type Props = ISizeProps & Pick<ITextFieldProps, "value">;

const Component: React.FC<Props> = props => {
  const { size, ...rest } = props;
  return (
    <SizeBox size={size ?? defaultSize}>
      <TextField width="100%" {...rest} />
    </SizeBox>
  );
};

export { Component as TextField };
