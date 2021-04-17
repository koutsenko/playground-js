import * as React from 'react';
import * as ReactDOM from 'react-dom';

import EnumDemo from './components/EnumDemo';

interface MyComponentProps {
  tokens: string[]
};

const MyComponent: React.SFC<MyComponentProps> = ({ tokens }) => (
  <div>
    {tokens.join(' ')}
  </div>
);

const tokens = ['Hello', 'webpack', 'and', 'react'];

ReactDOM.render((
  <div>
    <MyComponent {...{ tokens }} />
    <EnumDemo />
  </div>
), document.body);
