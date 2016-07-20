import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Workspace from './';

storiesOf( 'Workspace', module )
  .add( 'default', () => (
    <Workspace />
  ))
  ;

