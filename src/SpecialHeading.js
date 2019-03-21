import React from "react";
import Text from "./Text";
import Flex from "./Flex"
import { Fragment } from "react";
import styled from "styled-components";

const TranslatedText = styled(Text)`
  background-color: ${props => props.backgroundColor};
  margin: 0;
`;

TranslatedText.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: [4,6,7],
  color: "smokeWhite"
};

const TranslatedHeading = styled(Text.withComponent("h1"))`
  color: ${props => props.color};
`;

TranslatedHeading.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: [3,5,6]
};

const SpecialHeading = (props) => {
  const {text, placeholder, color, backgroundColor} = props;
  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto", 
        textAlign: "center"
      }}
    >
      <TranslatedText
        backgroundColor={backgroundColor}
      >
        {placeholder ? placeholder : text}
      </TranslatedText>
      <TranslatedHeading
        color={color}
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          margin: "0 auto"
        }}
      >
        {text}
      </TranslatedHeading>
    </div>
  );
};

export default SpecialHeading;