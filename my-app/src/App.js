import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { Authors } from "./utils/constants";

const mesArray = [
  {
    text: "Good morning",
    author: Authors.human,
  },
];

function App() {
  /* здесь хранятя данные */
  const [messages, setMessages] = useState(mesArray);

  /* здесь изменяются данные */
  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author !== Authors.bot
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            author: Authors.bot,
            text: "Hello, I'm a bot",
            id: Date.now(),
          }),
        1500
      );
      return () => clearTimeout(timeout);
    }
  }, [handleSendMessage, messages]);



  /* здесь лежат компоненты которые отображаются */
  return (
    <div className="App">
      <header className="App-header">
        <MessageList messages={messages} />

        <Form onSendMessage={handleSendMessage} />
      </header>
    </div>
  );
}

export default App;
