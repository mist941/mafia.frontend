import React, {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import {ReactComponent as CloseIcon} from '../../../assets/icons/close.svg';

type EssentialBlockProps = {
  children?: ReactNode;
  close: () => void;
}

const ModalWindow: FC<EssentialBlockProps> = ({children, close}) => {

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindowContent}>
        <EssentialBlock>
          {children}
          <CloseIcon
            className={styles.closeIcon}
            onClick={close}
          />
        </EssentialBlock>
      </div>
    </div>
  );
};

export default ModalWindow;