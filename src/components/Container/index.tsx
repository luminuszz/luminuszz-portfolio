import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';
import React from 'react';

type Props = ContainerProps;

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ChakraContainer maxW="100vw" maxH="100vh" {...props}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
