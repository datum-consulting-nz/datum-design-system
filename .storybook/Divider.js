import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Divider, Flex } from '../src';

storiesOf('Divider', module)
  .add(
    'Divider component',
    withInfo({
      text: 'Styled <Divider /> with settings for padding, margin, width, and color',
      inline: true
    })(() => <Divider color="primary" />)
  )
  .add('Margin', () => <Divider color="primary" m={3} />)
  .add('Width', () => <Divider color="primary" m={3} width={1 / 2} />)
  .add('Pixel width', () => <Divider color="primary" width={256} />)
  .add('VW width', () => <Divider color="primary" width="50vw" />)
  .add('Color', () => <Divider m={3} color="accent" />)
  .add('Height', () => <Divider m={3} color="accent" height="4px" />)
  .add('Directional margin', () => (
    <div>
      <Divider color="primary" mt={3} />
      <Divider color="primary" mr={3} />
      <Divider color="primary" mb={3} />
      <Divider color="primary" ml={3} />
      <Divider color="primary" mx={3} />
      <Divider color="primary" my={3} />
    </div>
  ))
  .add('Inside flex column', () => (
    <Flex flexDirection="column">
      <Divider />
      <Divider ml={4} mr={4} />
      <Divider ml={4} />
      <Divider ml={4} mr={5} />
      <Divider mx={2} />
    </Flex>
  ));
