import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC, useState } from 'react';
import { useQueryClient } from 'react-query';
import { z } from 'zod';

import Modal from '../../components/modal';
import { useUpdateChapterStatus } from '../../services/mutations/updateChapterStatus';
import {
  Commic,
  getUnreadCommicsCacheKey,
  useGetUnreadCommics,
} from '../../services/queries/getUnreadCommics';

type ModalState = {
  isOpen: boolean;
  commic: Commic | null;
};

type CommicProps = {
  commic: Commic;
  onClickSecondeButton: () => void;
};

const CommmicCard: FC<CommicProps> = ({ commic, onClickSecondeButton }) => {
  return (
    <VStack spacing={2}>
      <Image
        src="https://i.pinimg.com/originals/9b/96/92/9b9692c9f0db9f6276e6bd29a98c25e0.png"
        borderRadius="10px"
      />
      <Text size="14px" textAlign="center" color="white">
        {commic.name}
      </Text>

      {commic.hasNewchapter && (
        <Button
          size="md"
          as="a"
          colorScheme="yellow"
          variant="outline"
          target="_blank"
          href={commic.url}
        >
          Novo capítulo !
        </Button>
      )}

      <Button onClick={onClickSecondeButton} size="sm" colorScheme="teal">
        Marcar como lido
      </Button>
    </VStack>
  );
};

const SearchBar: FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      <HStack justifyContent="center" spacing="8" w="full">
        <Input
          maxWidth="600px"
          placeholder="boku no hero..."
          colorScheme="teal"
          borderRadius="md"
        />
        <Box>{loading && <Spinner size="md" />}</Box>
      </HStack>
    </>
  );
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  commic: Commic | null;
};

const UpdateChapterStatusModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  commic,
}) => {
  const [input, setInput] = useState<string>('');
  const updateChapter = useUpdateChapterStatus({
    onMutate: () => {
      queryClient.setQueryData(getUnreadCommicsCacheKey, (oldData: Commic[]) =>
        oldData.filter(item => item.id !== commic.id),
      );
    },
  });
  const queryClient = useQueryClient();

  const handleUpdateStatus = async (): Promise<void> => {
    const chapter = z.string().transform(Number).parse(input);

    if (Number.isNaN(chapter)) {
      alert('valor invalido');

      return;
    }

    updateChapter.mutate(
      {
        chapter,
        id: commic.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(getUnreadCommicsCacheKey);
          onClose();
        },

        onError: () => alert('erro ao atualizar capitulo'),
      },
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={commic?.name}
      isDisbledConfirm={input === ''}
      onConfirm={handleUpdateStatus}
    >
      <FormControl>
        <FormLabel>Qual capitulo foi lido ?</FormLabel>
        <Input
          onChange={e => setInput(e.target.value)}
          value={input}
          type="number"
        />
        <FormHelperText>Novo capitulo</FormHelperText>
      </FormControl>
    </Modal>
  );
};

const Commics: NextPage = () => {
  const [modalState, setModalState] = useState<ModalState>({
    commic: null,
    isOpen: false,
  });

  const { data, isLoading, isRefetching } = useGetUnreadCommics();

  const isFetching = isLoading || isRefetching;

  const commics = data?.filter(item => item.hasNewchapter);

  return (
    <Container maxW="container.lg" margin="auto" height="100vh">
      <UpdateChapterStatusModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ commic: null, isOpen: false })}
        commic={modalState.commic}
      />
      <VStack spacing="10" pt="10" justifyItems="center">
        <SearchBar loading={isFetching} />
        <Flex pt="20px" h="full">
          <SimpleGrid columns={3} spacing="40px">
            {commics?.map(commic => (
              <CommmicCard
                onClickSecondeButton={() => {
                  setModalState({ commic, isOpen: true });
                }}
                key={commic.id}
                commic={commic}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Commics;
