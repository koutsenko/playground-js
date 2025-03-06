import {useEffect, useState} from "react";
import Child from './Child';

export default function Parent() {
  const [messages, setMessages] = useState([{
    key: 'initial',
    text: 'Hello I\'m parent'
  }]);

  useEffect(() => {
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, {
        key: String(Math.random()),
        text: 'Delayed message'
      }]);
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      {messages.map(m => <p key={m.key}>{m.text}</p>)}
      <Child count={messages.length === 1 ? undefined : messages.length}/>
    </div>
  );
}
