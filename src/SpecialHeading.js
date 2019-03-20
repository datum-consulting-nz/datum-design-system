import React from "react";
import Text from "./Text";
import { Fragment } from "react";
import styled from "styled-components";

const TranslatedText = styled(Text)`
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
`;

TranslatedHeading.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: [3,5,6],
  mt: [-5,-6,-6]
};

const SpecialHeading = (props) => {
  const {text, placeholder, color} = props;
  return (
    <Fragment>
      <TranslatedText>
        {placeholder ? placeholder : text}
      </TranslatedText>
      <TranslatedHeading
        color={color}
      >
        {text}
      </TranslatedHeading>
    </Fragment>
  );
};

export default SpecialHeading;