import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Avatar } from '../src';

storiesOf('Avatar', module)
  .add(
    'Avatar component',
    withInfo({
      inline: true,
      text: 'A circular avatar image primitive.'
    })(() => <Avatar src="https://datumhq.com/static/f8f3be43ab1d99b0c53a2aa29129ad3a/49462/NickDo.png" />)
  )
  .add('Team', () => (
    <React.Fragment>
      {['zach.png', 'max.jpg', 'lachlan.jpg', 'mingjie.jpg', 'athul.jpg'].map(
        key => (
          <Avatar mr={2} src={`https://hackclub.com/team/${key}`} key={key} />
        )
      )}
    </React.Fragment>
  ));
