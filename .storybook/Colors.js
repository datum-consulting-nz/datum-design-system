import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Box, Flex, Text, Heading, theme } from "../src";

const getKeys = function(colorObject) {
  let keys = Object.keys(colorObject).filter(
    key => !Array.isArray(colorObject[key]));
  return keys.map(key => ({ key, value: colorObject[key] }));
};

const Chip = props => <Box w={1} p={5} {...props} />;

const Pre = styled(Text.withComponent("pre"))`
  font-family: ${theme.mono};
`;

const Card = ({ name, color }) => (
  <Box>
    <Chip name={name} bg={color}/>
    <Text fontSize={2} m={0} bold>
      {name}
    </Text>
    <Pre fontSize={0} m={0} color="muted">
      {color}
    </Pre>
  </Box>
);

storiesOf("Color", module)
  .add("All colors", () => (
    <div>
      <Heading.h1 p={3} f={[4, 5]}>
        Brand Color Pallet
      </Heading.h1>
      <Flex wrap>
        {getKeys(theme.brandColors).map(color =>
          !color.key[color.key.length - 1].match(/^\d+$/) ? (
            <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
              <Card name={color.key} color={color.value}/>
            </Box>
          ) : null
        )}
      </Flex>
      <Heading.h1 p={3} f={[4, 5]}>
        Gray Color Pallet
      </Heading.h1>
      <Flex wrap>
        {getKeys(theme.grayColors).map(color =>
          !color.key[color.key.length - 1].match(/^\d+$/) ? (
            <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
              <Card name={color.key} color={color.value}/>
            </Box>
          ) : null
        )}
      </Flex>
    </div>
  ));
