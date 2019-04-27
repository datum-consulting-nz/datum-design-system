import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BlockLink, BackgroundImage, Box, Text } from '../src';

storiesOf('BlockLink', module).add(
  'BlockLink',
  withInfo({
    inline: true,
    text: `<BlockLink /> is a styled-components wrapper of <Link /> component to remove text-decoration and color styles, and set display as block.`
  })(() => (
    <BlockLink href="https://datumhq.com" target="_blank">
      <BackgroundImage src="https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" width="640px">
        <Box p={4}>
          <Text align="center" color="white">
            Click to open www.datumhq.com in a new tab!
          </Text>
        </Box>
      </BackgroundImage>
    </BlockLink>
  ))
);
