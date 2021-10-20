/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-translate';
import Link from 'next-translate/Link';
import React, { useMemo } from 'react';
import { FaLanguage } from 'react-icons/fa';

import { allLanguages } from '../../../i18n.json';

const LangButton: React.FC = () => {
  const { lang } = useTranslation();

  const formattedLang = useMemo(() => (lang === 'pt' ? 'en' : 'pt'), [lang]);

  return (
    <Flex position="absolute" right="8" top="5" cursor="pointer" align="center">
      <>
        <Link lang={formattedLang} key={formattedLang} href="/">
          <Icon w="40px" h="40px" as={FaLanguage} />
        </Link>
        <Link lang={formattedLang} key={formattedLang} href="/">
          <Text
            ml="5"
            textTransform="uppercase"
            fontFamily="heading"
            fontWeight="500"
            letterSpacing="5px"
          >
            {formattedLang}
          </Text>
        </Link>
      </>
    </Flex>
  );
};

export default LangButton;
