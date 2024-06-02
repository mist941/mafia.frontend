import React, {FC, useState} from 'react';
import InputField from '../InputField/InputField';
import Button from '../../atoms/Button/Button';
import styles from './MassageInput.module.scss';

type MassageInputProps = {
  sendMessage: (text: string) => void;
}

const MassageInput: FC<MassageInputProps> = ({sendMessage}) => {
  const [text, setText] = useState<string>('');

  const handleSendMessage = () => {
    sendMessage(text);
    setText('');
  }

  return (
    <div className={styles.messageInput}>
      <InputField
        placeholder='Type ...'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') handleSendMessage();
        }}
      />
      <Button onClick={handleSendMessage}>
        Send
      </Button>
    </div>
  );
};

export default MassageInput;