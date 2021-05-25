import { Flex, HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

const SocialLinks: React.FC = () => {
  return (
    <Flex display="flex" flexDir="row" justify="center">
      <HStack spacing="5">
        <Link
          href="https://www.linkedin.com/in/davi-ribeiro-daviribeiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w="30px" h="30px" as={AiOutlineLinkedin} />
        </Link>
        <Link
          href="https://github.com/luminuszz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w="30px" h="30px" as={VscGithubAlt} />
        </Link>
      </HStack>
    </Flex>
  );
};

export default SocialLinks;
