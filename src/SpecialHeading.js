import React from "react";
import Text from "./Text";
import Flex from "./Flex"
import { Fragment } from "react";
import styled from "styled-components";

const TranslatedText = styled(Text)`
  background-color: ${props => props.backgroundColor};
`;

TranslatedText.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: [4,6,7],
  mb: [-1,2,-3],
  color: "smokeWhite"
};

const TranslatedHeading = styled(Text.withComponent("h1"))`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

TranslatedHeading.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: [3,5,6],
  mt: [-5,-6,-6]
};

const SpecialHeading = (props) => {
  const {text, placeholder, color, backgroundColor} = props;
  return (
    <Fragment>
      <TranslatedText
        backgroundColor={backgroundColor}
      >
        {placeholder ? placeholder : text}
      </TranslatedText>
      <TranslatedHeading
        color={color}
        backgroundColor={backgroundColor}
      >
        {text}
      </TranslatedHeading>
    </Fragment>
  );
};

export default SpecialHeading;