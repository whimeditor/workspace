import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import Workspace from './';

test( 'Workspace', t => {
  let expected, actual;
  t.plan( 1 );

  const wrapper = shallow( <Workspace /> );
  expected = true;
  actual = wrapper.is( 'h1' );

  t.ok( expected === actual, 'should render an h1' );
});

