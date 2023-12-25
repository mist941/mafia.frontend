import React, {FC, ReactNode} from 'react';
import styles from './ModalWindow.module.scss';
import EssentialBlock from '../../atoms/EssentialBlock/EssentialBlock';
import useOutsideClicker from '../../../hooks/useOutsideClicker';

type EssentialBlockProps = {
  children?: ReactNode;
  close: () => void;
}

const ModalWindow: FC<EssentialBlockProps> = ({children, close}) => {
  const modalRef = useOutsideClicker({
    onOutsideClick: () => close(),
  });

  return (
    <>
      <div className={styles.modalWindow}>
        <div className={styles.modalWindowContent} ref={modalRef}>
          <EssentialBlock padding='16px'>
            {children}
          </EssentialBlock>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;