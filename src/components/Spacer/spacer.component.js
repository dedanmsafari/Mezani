import styled, { useTheme } from "styled-components/native";
import React from "react";
const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const getSize = sizeVariant[size];
  const value = theme.space[getSize];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
