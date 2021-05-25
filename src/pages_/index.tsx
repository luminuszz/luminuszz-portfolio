import {
  Box,
  Flex,
  Heading,
  HTMLChakraProps,
  Image,
  Img,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useTranslation } from 'next-translate';
import React, { useEffect, useRef } from 'react';

import profile from '../assets/profile.jpeg';
import { SocialLinks, Container, LangButton, SEO } from '../components';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionImageProps = Merge<HTMLChakraProps<'img'>, HTMLMotionProps<'div'>>;

const MotionImage: React.FC<MotionImageProps> = motion(Image);

const Home: NextPage = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const animationWord = (await import('../utils/handleAnimationWord'))
        .default;

      if (textRef.current) {
        animationWord(textRef);
      }
    })();
  }, [textRef]);

  return (
    <>
      <SEO />
      <LangButton />
      <Container
        maxW="container.lg"
        margin="auto"
        height="100vh"
        position="relative"
      >
        <Flex justify="center" align="center" height="80%">
          <Stack
            direction={['column', 'column', 'column', 'row']}
            spacing={['25px', '25px', '100px']}
            align="center"
          >
            <Box align="center" textAlign="center">
              <Text
                as="span"
                color="white"
                fontSize={['lg', 'lg', '3xl']}
                display="flex"
              >
                <Img
                  mr={8}
                  src="https://camo.githubusercontent.com/35d3d11359a49bf12aebb834cc13fd81b95eff4e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                  width="30px"
                  height="30px"
                  data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  alt="gif"
                />
                <Text ref={textRef}>{t('common:main.title')}</Text>
              </Text>
              <Text ml="14" my="5" fontSize="2xl">
                {t('common:main.subTitle')}
              </Text>
              <SocialLinks />
            </Box>
            <MotionImage
              whileHover={{ scale: 1.1 }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 2.8,
                },
              }}
              src={profile}
              boxSize="400px"
              borderRadius="full"
            />
          </Stack>
        </Flex>

        <Flex mt="-6">
          <Box align="center">
            <VStack spacing="5">
              <Heading
                fontWeight="normal"
                fontSize={['lg', 'lg', '3xl']}
                fontStyle="italic"
                fontFamily=""
              >
                {t('common:about.quote')}
              </Heading>
              <Text fontFamily="heading" fontSize={['md', 'md', 'lg']}>
                {t('common:about.quoteAuthor')}
              </Text>
              <Text fontFamily="heading" fontSize={['md', 'md', 'lg']}>
                {t('common:about.textAbout')}
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
