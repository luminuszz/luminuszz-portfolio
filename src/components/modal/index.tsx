import {
  Button,
  Modal as CModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  isDisbledConfirm: boolean;
};

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  isDisbledConfirm,
}) => {
  return (
    <CModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button
            disabled={isDisbledConfirm}
            variant="solid"
            colorScheme="teal"
            onClick={onConfirm}
          >
            Marcar como lido
          </Button>
        </ModalFooter>
      </ModalContent>
    </CModal>
  );
};

export default Modal;
