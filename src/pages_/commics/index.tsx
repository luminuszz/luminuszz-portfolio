import {
  Badge,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC } from 'react';

const commics = [
  {
    id: 1,
    name: 'Boku no hero',
    hasNewChapter: false,
    status: 'following',
    image:
      'https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg',
    url: 'https://mangalivre.net/manga/black-clover/1751',
  },
  {
    id: 2,
    name: 'Boku no hero',
    hasNewChapter: false,
    status: 'following',
    image:
      'https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg',
    url: 'https://mangalivre.net/manga/black-clover/1751',
  },
  {
    id: 3,
    name: 'Boku no hero',
    hasNewChapter: true,
    status: 'following',
    image:
      'https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg',
    url: 'https://mangalivre.net/manga/black-clover/1751',
  },
  {
    id: 4,
    name: 'Boku no hero',
    hasNewChapter: true,
    status: 'following',
    image:
      'https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg',
    url: 'https://mangalivre.net/manga/black-clover/1751',
  },
];

type CommicProps = {
  commic: typeof commics[0];
};

const CommmicCard: FC<CommicProps> = ({ commic }) => {
  return (
    <VStack spacing={2}>
      <Image src={commic.image} borderRadius="10px" />
      <Text color="white">{commic.name}</Text>
      <Text color="white">{`Status: ${commic.status}`}</Text>
      {commic.hasNewChapter && (
        <Button
          as="a"
          colorScheme="yellow"
          variant="outline"
          target="_blank"
          href={commic.url}
        >
          Novo capítulo !
        </Button>
      )}
    </VStack>
  );
};

const SearchBar: FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <VStack spacing="8" w="full">
      <Input
        maxWidth="600px"
        placeholder="boku no hero..."
        w="full"
        colorScheme="teal"
        borderRadius="md"
      />

      <HStack>
        <Badge cursor="pointer" colorScheme="green">
          Read
        </Badge>
        <Badge cursor="pointer" colorScheme="yellow">
          Unread
        </Badge>
        <Badge cursor="pointer" colorScheme="red">
          Following
        </Badge>
      </HStack>
      {loading && <Spinner />}
    </VStack>
  );
};

const Commics: NextPage = () => {
  return (
    <Container maxW="container.lg" margin="auto" height="100vh">
      <VStack spacing="10" pt="10">
        <SearchBar loading />

        <Flex
          pt="20px"
          h="full"
          alignItems="flex-start"
          justifyContent="center"
        >
          <SimpleGrid columns={4} spacing="40px">
            {commics.map(commic => (
              <CommmicCard key={commic.id} commic={commic} />
            ))}
          </SimpleGrid>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Commics;
