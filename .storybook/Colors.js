import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Box, Flex, Text, Heading, theme } from '../src';

const getKeys = function(colorObject) {
  let keys = Object.keys(colorObject).filter(
    key => !Array.isArray(colorObject[key])
  );
  return keys.map(key => ({ key, value: colorObject[key] }));
};

const Chip = props => <Box w={1} p={5} {...props} />;

const Pre = styled(Text.withComponent('pre'))`
  font-family: ${theme.mono};
`;

const Card = ({ name, color }) => (
  <Box>
    <Chip name={name} bg={color} />
    <Text fontSize={2} m={0} bold>
      {name}
    </Text>
    <Pre fontSize={0} m={0} color="muted">
      {color}
    </Pre>
  </Box>
);

storiesOf('Color', module).add('All colors', () => (
  <div>
    <Heading.h1 p={3} f={[4, 5]}>
      Brand Color Pallet
    </Heading.h1>
    <Flex wrap>
      {getKeys(theme.brandColors).map(color =>
        !color.key[color.key.length - 1].match(/^\d+$/) ? (
          <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
            <Card name={color.key} color={color.value} />
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
            <Card name={color.key} color={color.value} />
          </Box>
        ) : null
      )}
    </Flex>
    <Heading.h1 p={3} f={[4, 5]}>
      Blue Color Pallet
    </Heading.h1>
    <Flex wrap>
      {getKeys(theme.blueColors).map(color => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <Card name={color.key} color={color.value} />
        </Box>
      ))}
    </Flex>
    <Heading.h1 p={3} f={[4, 5]}>
      Orange Color Pallet
    </Heading.h1>
    <Flex wrap>
      {getKeys(theme.orangeColors).map(color => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <Card name={color.key} color={color.value} />
        </Box>
      ))}
    </Flex>
    <Heading.h1 p={3} f={[4, 5]}>
      Green Color Pallet
    </Heading.h1>
    <Flex wrap>
      {getKeys(theme.greenColors).map(color => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <Card name={color.key} color={color.value} />
        </Box>
      ))}
    </Flex>
    <Heading.h1 p={3} f={[4, 5]}>
      Violet Color Pallet
    </Heading.h1>
    <Flex wrap>
      {getKeys(theme.violetColors).map(color => (
        <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
          <Card name={color.key} color={color.value} />
        </Box>
      ))}
    </Flex>
  </div>
));
