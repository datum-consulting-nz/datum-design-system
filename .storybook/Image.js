import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Image, Box } from '../src';

const text = 'A low-level layout component that renders an image';
const props = {
  src: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  alt: 'Smiling students at a hackathon'
};

storiesOf('Image', module)
  .add(
    'Image component',
    withInfo({
      text,
      inline: true
    })(() => <Image {...props} />)
  )
  .add('Responsive width, with Box', () => (
    <Box width={1 / 2}>
      <Image {...props} />
    </Box>
  ));
