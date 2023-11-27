import React, {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';

interface EssentialBlockProps {
  children?: ReactNode;
}

const ModalWindow: FC<EssentialBlockProps> = ({children}) => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowContent}>
        <EssentialBlock padding='16px'>
          {children}
        </EssentialBlock>
      </div>
    </div>
  );
};

export default ModalWindow;