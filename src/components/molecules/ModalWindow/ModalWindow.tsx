import React, {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';

type EssentialBlockProps = {
  children?: ReactNode;
  close: () => void;
}

const ModalWindow: FC<EssentialBlockProps> = ({children}) => {

  return (
    <>
      <div className={styles.modalWindow}>
        <div className={styles.modalWindowContent}>
          <EssentialBlock>
            {children}
          </EssentialBlock>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;