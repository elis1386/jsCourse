
export const MessageList = ({ messages }) => {

  return messages.map((message) => <article><span>{message.author}</span> : <span>{message.text}</span></article> );
};
