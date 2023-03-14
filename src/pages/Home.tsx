import { useState } from 'react';
import moment from 'moment';
import Layout from '../components/Layout';
import { useTheme } from '../context/themeProvider';
import styles from './home.module.css';
import Button from '../components/Button';
import MessageList from '../components/MessageList';
import TextArea from '../components/TextArea';
const Home = () => {
  const { theme, switchTheme } = useTheme();
  const [messages, setMessages] = useState<string[]>([]);
  const [textArea, setTextArea] = useState('');
  const [numOfButton, setNumOfButton] = useState(1);
  const [buttons, setButtons] = useState<any[]>([]);

  const onThemeChange = () => {
    let date = new Date(); // get current date
    let formattedDate = moment(date).format('MM/DD/YY hh:mm:ss');
    let message = `${formattedDate} Theme was set to ${
      theme === 'dark' ? 'light' : 'dark'
    }`;
    setMessages([message, ...messages]);
    switchTheme();
  };
  const onTextAreaChange = (e: any) => {
    setTextArea(e.target.value);
  };
  const handleSubmit = () => {
    let message = `Message Sent: ${textArea}`;
    setMessages([message, ...messages]);
    setTextArea('');
  };

  const onAddButton = () => {
    const buttonProperty = {
      name: numOfButton,
      placeholder: `Button ${numOfButton}`,
    };
    setButtons([...buttons, buttonProperty]);
    let message = `Button ${numOfButton} added`;
    setMessages([message, ...messages]);
    setNumOfButton((numOfButton) => numOfButton + 1);
  };

  const onAddedButtonClick = (e: any) => {
    let message = `Button ${e.target.name} clicked`;
    setMessages([message, ...messages]);
  };

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <Button
            onClick={onThemeChange}
            placeholder={`Set ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
          />
          <div className={styles.messageForm}>
            <TextArea onChange={onTextAreaChange} value={textArea} />
            <br />
            <Button
              placeholder='Send'
              onClick={handleSubmit}
              disabled={!textArea}
            />
          </div>
          <Button
            onClick={onAddButton}
            placeholder={`Add Button ${numOfButton}`}
          />
          <div className={styles.btnsContainer}>
            {buttons.map((btn, i) => (
              <button key={i} name={btn.name} onClick={onAddedButtonClick}>
                {btn.placeholder}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <MessageList messages={messages} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
