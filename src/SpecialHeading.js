import React from "react";
import Text from "./Text";
import { Fragment } from "react";
import styled from "styled-components";

const TranslatedText = styled(Text)`
  transform:translateY(40px);
`;

TranslatedText.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: 7,
  m: 0,
  color: "smokeWhite"
};

const TranslatedHeading = styled(Text.withComponent("h1"))`
  transform:translateY(-35px);
`;

TranslatedHeading.defaultProps = {
  align: "center",
  regular: true,
  bold: true,
  f: 6,
  m: 0
};

const SpecialHeading = (props) => {
  const {text, placeholder} = props;
  return (
    <Fragment>
      <TranslatedText>
        {text}
      </TranslatedText>
      <TranslatedHeading>
        {placeholder ? placeholder : text}
      </TranslatedHeading>
    </Fragment>
  );
};

export default SpecialHeading;