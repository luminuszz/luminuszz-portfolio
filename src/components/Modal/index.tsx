import React, {
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import ReactModal, { Styles } from 'react-modal';
import { useTranslation } from 'next-translate';

import { Button } from '..';

export interface InoperativeModalProps {
  handleOpenModal: (currentMessage: string) => void;
  handleCloseModal: () => void;
}
type ModalProps = ComponentPropsWithRef<'div'>;

const Modal: React.ForwardRefRenderFunction<
  InoperativeModalProps,
  ModalProps
> = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const { t } = useTranslation();

  const handleOpenModal = useCallback(currentMessage => {
    setIsOpen(true);
    if (currentMessage) {
      setMessage(currentMessage);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      handleCloseModal,
      handleOpenModal,
    }),
    [handleCloseModal, handleOpenModal],
  );

  const styles: Styles = {
    content: {
      width: 250,
      height: 250,
      background: '#181b2b',
      borderWidth: '2px',
      borderColor: '#ffff',
      color: '#ffff',
      borderStyle: 'solid',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      background: '#181b2b',
      opacity: 0.9,
    },
  };

  return (
    <ReactModal style={styles} contentLabel="Exemplo" isOpen={isOpen}>
      <span>{message}</span>

      <Button onClick={handleCloseModal}>
        {t('common:components.modal.button')}
      </Button>
    </ReactModal>
  );
};
export default forwardRef(Modal);
