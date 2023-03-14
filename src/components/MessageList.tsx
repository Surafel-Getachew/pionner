import styles from './messageList.module.css';
type MessageListProps = {
  messages: string[];
};

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className={styles.messageContainer}>
      {messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </div>
  );
};

export default MessageList;
