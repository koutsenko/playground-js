import * as React from 'react';
import * as ReactDOM from 'react-dom';

import EnumsDemo from './components/EnumsDemo';
import InterfacesDemo from './components/InterfacesDemo';

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
    <EnumsDemo />
    <InterfacesDemo />
  </div>
), document.body);
