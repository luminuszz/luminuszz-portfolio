/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon, Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-translate';
import Link from 'next-translate/Link';
import React, { useMemo } from 'react';
import { FaLanguage } from 'react-icons/fa';

import { allLanguages } from '../../../i18n.json';

const LangButton: React.FC = () => {
  const { lang } = useTranslation();

  const formattedLang = useMemo(() => {
    return allLanguages.filter(currentLang => currentLang !== lang);
  }, [lang]);

  return (
    <Flex position="absolute" right="8" top="5" cursor="pointer" align="center">
      {formattedLang.map(currentLang => (
        <>
          <Link lang={currentLang} key={currentLang} href="/">
            <Icon w="40px" h="40px" as={FaLanguage} />
          </Link>
          <Text
            ml="5"
            textTransform="uppercase"
            fontFamily="heading"
            fontWeight="500"
            letterSpacing="5px"
          >
            {currentLang}
          </Text>
        </>
      ))}
    </Flex>
  );
};

export default LangButton;
